/** @jsx h */
import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import ky from 'ky'

const CORS_URL = 'https://cors.louismerl.in'
const DATE_FORMATTER = new Intl.DateTimeFormat('ch-fr', {hour: '2-digit', minute: '2-digit'}).format;

function Room ({ name }) {
  const [occupancy, setOccupancy] = useState({ text: 'loading', isFree: false, occupiedSoon: false})

  useEffect(() => {
    async function getRoomOccupancy () {
      const res = await ky.get(`${CORS_URL}/https://ewa.epfl.ch/room/Default.aspx?room=${name}`).text()

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
      const now = new Date()

      const currentEvent = parsedRoomOccupancy.find(({ Start, End }) => {
        const startDate = new Date(Start)
        const endDate = new Date(End)
        return now > startDate && now < endDate
      })
      const oneDay = new Date(now.getTime() + 24 * 60 * 60 * 1000)
      const nextEvent = parsedRoomOccupancy.find(({ Start }) => {
        const startDate = new Date(Start)
        return now < startDate && startDate < oneDay
      })
      const nextEventStart = nextEvent ? new Date(nextEvent.Start) : null

      const isOccupiedSoon = nextEventStart ? nextEventStart.getTime() - now.getTime() <= 60 * 60 * 1000 : false
      const isFree = currentEvent == null
      const text = isFree && nextEvent ? `available until ${DATE_FORMATTER(nextEventStart)}` : currentEvent && currentEvent.Text

      setOccupancy({ text, isFree, isOccupiedSoon })
    }

    getRoomOccupancy()
  }, [])

  let emoji = '👍 '
  if (occupancy.text === 'loading') {
    emoji = '🔄'
  }else if (!occupancy.isFree) {
    emoji = '⛔'
  } else if (occupancy.isOccupiedSoon) {
    emoji = '⏳'
  } 

  return (
    <tr>
      <td>
        {emoji}
      </td>
      <td>
        <strong>{' '}{name.toUpperCase()}</strong>
      </td>
      <td class='text-right fullwidth'>
        {occupancy.text}
      </td>
    </tr>
  )
}

export default Room
