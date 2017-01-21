import React from 'react'
import store from './store'
import { Provider } from 'react-redux'

const Wrapper = props =>
  <Provider store={store}>
    {props.children}
  </Provider>

export default Wrapper
