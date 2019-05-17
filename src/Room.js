/** @jsx h */
import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import ky from 'ky'

function Room ({ name }) {
  const [occupancy, setOccupancy] = useState('loading')

  useEffect(() => {
    async function getRoomOccupancy () {
      const roomOccupancy = await ky.get(`https://cors-anywhere.herokuapp.com/https://ewa.epfl.ch/room/Default.aspx?room=${name}`).text()

      const parsedRoomOccupancy = JSON.parse(
        roomOccupancy
          .split('\n')
          .find(x => x.includes('v.events'))
          .replace('v.events = ', '')
          .replace(/;/g, '')
          .replace(/<br>/g, '')
          .replace(/ISA - /g, '')
          .replace(/\\/g, '')
      )

      const currentEvent = parsedRoomOccupancy.find(({ Start, End }) => {
        const now = new Date()
        const startDate = new Date(Start)
        const endDate = new Date(End)
        return now > startDate && now < endDate
      })

      const nextEvent = parsedRoomOccupancy.find(({ Start, End }) => {
        const soon1 = new Date(Date.now() + 45 * 60 * 1000)
        const soon2 = new Date(Date.now() + 60 * 60 * 1000)
        const startDate = new Date(Start)
        const endDate = new Date(End)
        return (soon1 > startDate && soon2 < endDate) || (soon2 > startDate && soon2 < endDate)
      })

      setOccupancy(currentEvent ? currentEvent.Text : (nextEvent && 'occupied soon'))
    }

    getRoomOccupancy()
  }, [])

  let emoji = '👍 '
  if (occupancy === 'loading') {
    emoji = '🙃'
  } else if (occupancy === 'occupied soon') {
    emoji = '⏳'
  } else if (occupancy) {
    emoji = '⛔'
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
        {occupancy}
      </td>
    </tr>
  )
}

export default Room
