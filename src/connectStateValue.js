import { connect } from 'react-redux'
import { identity, getValueFromPathArray, getPropNameFromPathArray } from './util'

/**
 * Returns a function that connects a value in state to a React component as a prop
 * @param {Array.<string>|string} pathArray
 * @param {string} propName
 * @param {function} transformValue
 */
export default (
  pathArray = [],
  propName = getPropNameFromPathArray(pathArray),
  transformValue = identity
) =>
  connect(
    state => ({
      [propName]: transformValue(
        getValueFromPathArray(pathArray, state),
        state
      )
    })
  )
