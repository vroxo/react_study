import React from 'react'
import ReactDOM from "react-dom"
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

// import Field from './components/Field'
// import FieldReducer from './components/FieldReducer'
import CounterReducer from './components/CounterReducer'
import CounterRedux from './components/CounterRedux'

const reducers = combineReducers({
    field: CounterReducer
})

const element = document.getElementById('root')
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <CounterRedux />
    </Provider>
    , element)