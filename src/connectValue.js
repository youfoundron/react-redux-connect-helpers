import { connect } from 'react-redux'

/**
 * Returns a function that connects a value to a React component as a prop
 * @param {any} value
 * @param {string} propName
 */
export default (value, propName) => connect(
  state => ({
    [propName]: value
  })
)
