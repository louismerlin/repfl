/** @jsx h */
import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import Room from './Room'
import rooms from './rooms.json'

function Buildings () {
  let [loadedRoomCount, setLoadedRoomCount] = useState(0)
  const [selectedBuilding, setSelectedBuilding] = useState('all')

  const buildings = Object.keys(rooms)
  const roomCount = Object.values(rooms).flat().length

  const loadedCallback = () => {
    loadedRoomCount += 1
    setLoadedRoomCount(loadedRoomCount)
  }

  return (
    <Fragment>

      <progress
        class='rooms-progress'
        value={loadedRoomCount || '0'}
        max={roomCount}
        style={{
          opacity: loadedRoomCount === roomCount && '0'
        }}
      >
        {loadedRoomCount}/{roomCount}
      </progress>

      <p class='button-list'>

        {['all'].concat(buildings).map(building => (
          <Fragment key={building}>
            <button
              onClick={() => setSelectedBuilding(building)}
              class={selectedBuilding === building ? 'filled' : undefined}
            >
              {building.toUpperCase()}
            </button>{' '}
          </Fragment>
        ))}

      </p>

      {buildings.map(building => (
        <div
          key={building}
          style={{
            display: selectedBuilding !== 'all' && selectedBuilding !== building ? 'none' : undefined
          }}
        >
          <h2 class='building-name'>{building.toUpperCase()}</h2>
          <hr class='building-hr' />
          <table>
            <tbody>
              {rooms[building].map(room => <Room key={room} name={room} loaded={loadedCallback} />)}
            </tbody>
          </table>
        </div>
      ))}
    </Fragment>
  )
}

export default Buildings
