import React from 'react'
import Provider from 'Provider.js'
import App from 'App.js'
import { render } from 'react-dom'
import constants from 'constants.js'
import * as serviceWorker from './serviceWorker'

const domElement = document.getElementById('root')

const Application = () => (
  <Provider>
    <App />
  </Provider>
)

if (constants.isDevelopment) {
  const Profiler = React.Profiler || React.unstable_Profiler
  const trace = require('scheduler/tracing').unstable_trace
  const count = {
    mount: 0,
    update: 0
  }
  trace('initial render', performance.now(), () => {
    const onRender = (x, y) => {
      count[y]++
      console.info(x, y, count[y])
    }
    return render(
      <Profiler id="Application" onRender={onRender}>
        <Application />
      </Profiler>,
      domElement
    )
  })
} else render(<Application />, domElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
