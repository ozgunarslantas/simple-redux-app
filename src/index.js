import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import { createStore, compose } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(reducer, composeEnhancers())

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root"),
  )
}

store.subscribe(render)

render()
