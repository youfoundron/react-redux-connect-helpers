import { identity } from 'ramda'
import { connect } from 'react-redux'

/**
 * Returns a function that connects a value in state to a React component as a prop
 * @param {Array.<string>|string} pathArray
 * @param {string} propName
 * @param {function} transformValue
 */
export default ({getValueFromPathArray, getPropNameFromPathArray}) => (
  pathArray = [],
  propName = getPropNameFromPathArray(pathArray),
  transformValue = identity
) => connect(
  state => ({
    [propName]: transformValue(
      getValueFromPathArray(pathArray, state),
      state
    )
  })
)
