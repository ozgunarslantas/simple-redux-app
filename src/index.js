import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { createEpicMiddleware } from "redux-observable"
import reducer from "./reducers"
import combinedEpics from "./epics"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
)

epicMiddleware.run(combinedEpics)

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
