import connectStateValue from './connectStateValue'
import { always } from './util'

/**
 * Returns a function that connects a value to a React component as a prop
 * @param {any} value
 * @param {string} propName
 */
export default (value, propName) =>
  connectStateValue(null, propName, always(value))
