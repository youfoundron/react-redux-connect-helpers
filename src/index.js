import util from './util'
import connectValue from './connectValue'
import createActionConnector from './createActionConnector'
import connectStateValueFactory from './connectStateValueFactory'

const connectStateValue = connectStateValueFactory(util)

export default {
  connectValue,
  connectStateValue,
  createActionConnector
}

export {
  connectValue,
  connectStateValue,
  createActionConnector
}
