/** @jsx h */
import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import ky from 'ky'

const NOW = new Date()
const CORS_URL = 'https://cors.louismerl.in'
const ROOM_URL = 'https://ewa.epfl.ch/room/Default.aspx?room='
const DATE_FORMATTER = new Intl.DateTimeFormat('ch-fr', { hour: '2-digit', minute: '2-digit' }).format
const ONE_DAY = new Date(NOW.getTime() + 24 * 60 * 60 * 1000)
const HOURGLASS = 60 * 60 * 1000
const SIXTEEN_MINUTES = 16 * 60 * 1000

function Room ({ name }) {
  const [occupancy, setOccupancy] = useState({ isLoading: true, freeUntil: null, occupiedUntil: null })

  useEffect(() => {
    async function getRoomOccupancy () {
      const res = await ky.get(`${CORS_URL}/${ROOM_URL}${name}`).text()

      const roomOccupancy = res
        .split('\n')
        .find(x => x.includes('v.events'))
        .replace('v.events = ', '')
        .replace(/;/g, '')
        .replace(/\\"/g, '')
        .replace(/<br>/g, '')
        .replace(/ISA - /g, '')
        .replace(/\\/g, '')

      const parsedRoomOccupancy = JSON.parse(roomOccupancy)

      const currentEvent = parsedRoomOccupancy.reduce((acc, { Start, End }) => {
        const startDate = new Date(Start)
        const endDate = new Date(End)
        if (acc) {
          const accEndDate = new Date(acc.End)
          if (accEndDate + SIXTEEN_MINUTES > startDate) {
            return ({ Start, End })
          } else {
            return acc
          }
        } else if (NOW > startDate && NOW < endDate) {
          return ({ Start, End })
        }
      }, null)

      const nextEvent = parsedRoomOccupancy.find(({ Start }) => {
        const startDate = new Date(Start)
        return NOW < startDate && startDate < ONE_DAY
      })

      const freeUntil = !currentEvent && nextEvent && new Date(nextEvent.Start)
      const occupiedUntil = currentEvent && new Date(currentEvent.End)

      setOccupancy({ isLoading: false, freeUntil, occupiedUntil })
    }

    getRoomOccupancy()
  }, [])

  let text = 'loading'
  let emoji = '🔄'

  if (!occupancy.isLoading) {
    text = ''
    emoji = '👍'
    if (occupancy.freeUntil) {
      text = `available until ${DATE_FORMATTER(occupancy.freeUntil)}`
      if (occupancy.freeUntil - NOW <= HOURGLASS) {
        emoji = '⏳'
      }
    } else if (occupancy.occupiedUntil) {
      text = `occupied until ${DATE_FORMATTER(occupancy.occupiedUntil)}`
      emoji = '⛔'
    }
  }

  return (
    <tr>
      <td>
        {emoji}
      </td>
      <td>
        <strong>
          <a href={`${ROOM_URL}${name}`}>
            {name.toUpperCase()}
          </a>
        </strong>
      </td>
      <td class='text-right fullwidth'>
        {text}
      </td>
    </tr>
  )
}

export default Room
