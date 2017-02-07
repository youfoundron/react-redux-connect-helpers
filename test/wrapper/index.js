import React from 'react'
import store, { immutable as immutableStore } from './store'
import { Provider } from 'react-redux'

const makeWrapper = store => props =>
  <Provider store={store}>
    {props.children}
  </Provider>

export default makeWrapper(store)
export const immutable = makeWrapper(immutableStore)
