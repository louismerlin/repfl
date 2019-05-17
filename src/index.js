/** @jsx h */
import { h, render } from 'preact'
import 'normalize.css'
import 'concrete.css'
import Room from './Room'
import './main.css'
import ROOMS from './ROOMS.json'

function Main () {
  return (
    <main class='container'>

      <header>
        <h1 class='less-margin title'>rEPFL</h1>
        <h3 class='less-margin'>Find a free room @ EPFL</h3>
      </header>

      <hr />

      {ROOMS.map(room => <Room name={room} />)}

      <footer>
        <h5 class='less-margin'>Made with {'<3'} by <a href='https://louismerl.in'>Louis Merlin</a></h5>
        <h5 class='less-margin'>Need more rooms ? <a href='https://github.com/louismerlin/repfl/blob/master/src/ROOMS.json'>Add them</a> or <a href='mailto:louis.merlin@epfl.ch'>email me</a></h5>
      </footer>

    </main>
  )
}

render(<Main />, document.body)
