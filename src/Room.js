/** @jsx h */
import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import reeq from 'reeq'

const CORS_URL = 'https://cors.louis.workers.dev?apiurl='
const ROOM_URL = 'https://ewa.epfl.ch/room/Default.aspx?room='

const NOW = new Date()
const IN_ONE_DAY = new Date(NOW.getTime() + 24 * 60 * 60 * 1000)
const HOURGLASS_LIMIT = 60 * 60 * 1000
const SIXTEEN_MINUTES = 16 * 60 * 1000

const formatDate = new Intl.DateTimeFormat('ch-fr', { hour: '2-digit', minute: '2-digit' }).format

function parseDate (dateString) {
  // See https://stackoverflow.com/a/5619588
  const offset = NOW.getTimezoneOffset() === -60 ? '+01:00' : '+02:00'
  return new Date(dateString + offset)
}

const ROOM_STATES = [{
  text: 'loading',
  emoji: '🔄'
}, {
  text: '',
  emoji: '👍'
}, {
  text: 'Could not load information',
  emoji: '🤷‍♀️'
}, {
  text: 'available for revisions',
  emoji: '👩‍🏫'
}, {
  text: 'available until ',
  emoji: '👍'
}, {
  text: 'available until ',
  emoji: '⏳'
}, {
  text: 'occupied until ',
  emoji: '⛔'
}]

function Room ({ name, loaded }) {
  const [roomState, setRoomState] = useState(0)
  const [addOnText, setAddOnText] = useState('')

  useEffect(() => {
    async function getRoomOccupancy () {
      // Get the room occupancy from the EPFL calendar
      const res = await reeq(`${CORS_URL}${ROOM_URL}${name}`)

      loaded()

      if (!res || !res.length) {
        return setRoomState(2) // Error
      }

      const events = res
        .split('\n')
        .find(x => x.includes('v.events'))

      if (!events || events === undefined) {
        return setRoomState(2) // Error
      }

      // Do a little bit of parsing
      const roomOccupancy = events
        .replace('v.events = ', '')
        .replace(/;/g, '')
        .replace(/\\"/g, '')
        .replace(/<br>/g, '')
        .replace(/ISA - /g, '')
        .replace(/\\/g, '')

      const parsedRoomOccupancy = JSON.parse(roomOccupancy)

      const currentEvent = parsedRoomOccupancy.reduce((acc, { Start, End, Text }) => {
        const startDate = parseDate(Start)
        const endDate = parseDate(End)
        if (acc) {
          const accEndDate = new Date(acc.End)
          if (new Date(accEndDate.getUTCMilliseconds() + SIXTEEN_MINUTES) > startDate) {
            return ({ Start, End, Text })
          } else {
            return acc
          }
        } else if (NOW > startDate && NOW < endDate) {
          return ({ Start, End, Text })
        }
      }, null)

      const nextEvent = parsedRoomOccupancy.find(({ Start }) => {
        const startDate = parseDate(Start)
        return NOW < startDate && startDate < IN_ONE_DAY
      })

      const freeUntil = !currentEvent && nextEvent && parseDate(nextEvent.Start)
      const occupiedUntil = currentEvent && parseDate(currentEvent.End)
      const isReservationPonctuelle =
        (currentEvent && currentEvent.Text === 'Réservation ponctuelle') ||
        (nextEvent && nextEvent.Text === 'Réservation ponctuelle')

      if (isReservationPonctuelle) {
        return setRoomState(3) // Revisions
      }
      if (freeUntil) {
        setAddOnText(formatDate(freeUntil))
        if (freeUntil - NOW.getTime() <= HOURGLASS_LIMIT) {
          return setRoomState(5) // Hourglass until
        } else {
          return setRoomState(4) // Good until
        }
      }
      if (occupiedUntil) {
        setAddOnText(formatDate(occupiedUntil))
        return setRoomState(6) // Not available
      }
      return setRoomState(1) // Good
    }

    getRoomOccupancy()
  }, [])

  const { emoji, text } = ROOM_STATES[roomState]

  return (
    <tr>
      <td>
        {emoji}
      </td>
      <td>
        <strong>
          <a target='_blank' rel='noopener noreferrer' href={`${ROOM_URL}${name}`}>
            {name.toUpperCase()}
          </a>
        </strong>
      </td>
      <td class='text-td'>
        {text}
        {addOnText}
      </td>
    </tr>
  )
}

export default Room
