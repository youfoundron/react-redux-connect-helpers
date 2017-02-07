import {
  ifElse,
  isArrayLike,
  lensPath,
  lensProp,
  view,
  last,
  identity
} from 'ramda'

/**
 * Returns a Ramda lens object for the given path array
 * @param {Array.<string>|string} pathArray
 */
const getLensFromPathArray = ifElse(isArrayLike, lensPath, lensProp)

/**
 * Returns the value at the end of the path for the given object
 * @param {Array.<string>|string} pathArray
 * @param {object} object
 */
const getValueFromPathArray = (pathArray, object) =>
  view(getLensFromPathArray(pathArray), object)

/**
 * Returns the property name inferred from the given path array
 * @param {Array.<string>|string} pathArray
 */
const getPropNameFromPathArray = ifElse(isArrayLike, last, identity)

export default {
  getValueFromPathArray,
  getPropNameFromPathArray
}
