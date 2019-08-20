/** @jsx h */
import { h, render, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import 'normalize.css'
import 'concrete.css'
import Room from './Room'
import './main.css'
import rooms from './rooms.json'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').then(registration => {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }, err => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}

const buildings = Object.keys(rooms)

function Main () {
  const [selectedBuilding, setSelectedBuilding] = useState('all')
  let [loadedRoomCount, setLoadedRoomCount] = useState(0)

  const roomCount = Object.values(rooms).reduce((acc, cur) => acc + cur.length, 0)

  const loadedCallback = () => {
    loadedRoomCount += 1
    setLoadedRoomCount(loadedRoomCount)
  }

  const progressStyle = loadedRoomCount === roomCount ? {
    opacity: 0
  } : {}

  return (
    <main class='container'>

      <header class='header'>
        <h1 class='less-margin title'>rEPFL</h1>
        <h3 class='less-margin'>find a free room @ EPFL</h3>
      </header>

      <progress class='rooms-progress' value={loadedRoomCount || '0'} max={roomCount} style={progressStyle}>
        {loadedRoomCount}/{roomCount}
      </progress>

      <p class='button-list'>

        {['all'].concat(buildings).map(building => (
          <Fragment>
            <button
              onClick={() => setSelectedBuilding(building)}
              class={selectedBuilding === building ? 'filled' : ''}
            >
              {building.toUpperCase()}
            </button>{' '}
          </Fragment>
        ))}

      </p>

      {buildings.map(building => (
        <div class={selectedBuilding !== 'all' && selectedBuilding !== building && 'hidden'}>
          <h2 class='text-center table-h2'>{building.toUpperCase()}</h2>
          <hr class='table-hr' />
          <table>
            <tbody>
              {rooms[building].map(room => <Room key={room} name={room} loaded={loadedCallback} />)}
            </tbody>
          </table>
        </div>
      ))}

      <footer class='footer'>
        <hr />
        <h5 class='less-margin'>made with ❤️ by <a href='https://louismerl.in'>Louis Merlin</a></h5>
        <h5 class='less-margin'>using <a href='https://preactjs.com'>preact</a> and <a href='https://concrete.style'>concrete.css</a></h5>
        <h5 class='less-margin'>need more rooms ? <a href='https://github.com/louismerlin/repfl/blob/master/src/rooms.json'>add them</a> or <a href='mailto:louis.merlin@epfl.ch'>email me</a></h5>
        <h5 class='less-margin'>don't hesitate to <a href='https://github.com/louismerlin/repfl'>star and/or contribute</a></h5>
      </footer>

    </main>
  )
}

render(<Main />, document.body)
