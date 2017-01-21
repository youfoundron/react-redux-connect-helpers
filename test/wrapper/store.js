import rootReducer from './rootReducer'
import initialState from './initialState'
import { createStore } from 'redux'

export default createStore(rootReducer, initialState)
