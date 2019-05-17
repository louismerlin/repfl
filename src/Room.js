/** @jsx h */
import { h, Fragment } from 'preact'
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

      setOccupancy(currentEvent && currentEvent.Text)
    }

    getRoomOccupancy()
  }, [])

  return (
    <Fragment>
      <h4>
        {occupancy === 'loading' ? '🙃' : (occupancy ? '⛔ ' : '👍 ')}
        {name.toUpperCase()}
        <span class='float-right'>{occupancy}</span>
      </h4>
      <hr />
    </Fragment>
  )
}

export default Room
