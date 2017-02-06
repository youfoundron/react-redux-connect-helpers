import {
  ifElse,
  isArrayLike,
  last,
  identity
} from 'ramda'

/**
 * Takes any number of arguments and puts them in an array
 */
const toArray = (...args) => [...args]

/**
 * Returns the given path array, handles string values
 * @param {Array.<string>|string} pathArray
 */
const normalizePathArray = ifElse(isArrayLike, identity, toArray)

/**
 * Returns the value at the end of the path for the given Immutable Map
 * @param {Array.<string>|string} pathArray
 * @param {Immutable Structure} immutable
 */
const getValueFromPathArray = (pathArray, immutable) =>
  immutable.getIn(normalizePathArray(pathArray))

/**
 * Returns the property name inferred from the given path array
 * @param {Array.<string>|string} pathArray
 */
const getPropNameFromPathArray = ifElse(isArrayLike, last, identity)

export {
  getValueFromPathArray,
  getPropNameFromPathArray
}
