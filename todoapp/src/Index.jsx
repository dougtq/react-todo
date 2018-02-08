import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import reduxMulti from 'redux-multi'
import reduxThunk from 'redux-thunk'

import App from './main/App'
import reducers from './main/Reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && __REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(reduxMulti, reduxPromise, reduxThunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>,
    document.getElementById('root')
)