import R, { always, identity } from 'ramda'

/**
 * Returns a Ramda lens object for the given path array
 * @param {Array.<string>|string} pathArray
 */
const getLensFromPathArray = R.ifElse(R.isArrayLike, R.lensPath, R.lensProp)

/**
 * Returns the value at the end of the path for the given object
 * @param {Array.<string>|string} pathArray
 * @param {object} object
 */
const getValueFromPathArray = (pathArray, object) =>
  R.view(getLensFromPathArray(pathArray), object)

/**
 * Returns the property name inferred from the given path array
 * @param {Array.<string>|string} pathArray
 */
const getPropNameFromPathArray = R.ifElse(R.isArrayLike, R.last, identity)

export {
  always,
  identity,
  getLensFromPathArray,
  getValueFromPathArray,
  getPropNameFromPathArray
}
