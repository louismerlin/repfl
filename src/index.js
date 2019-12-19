/** @jsx h */
import 'regenerator-runtime/runtime'
import { h, render } from 'preact'
import 'normalize.css'
import 'concrete.css'
import Buildings from './Buildings'
import './main.css'

render(<Buildings />, document.getElementById('app'))
