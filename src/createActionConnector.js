import { connect } from 'react-redux'

/**
 * A higher order function that returns a function to connect bound actions to React components as props
 * @param {object} actionCreators
 */
export default (actionCreators = {}) =>
  (actionName, propName = actionName) =>
    connect(null,
      dispatch => ({
        [propName]: (...args) => // bind the action creator to dispatch
          dispatch(actionCreators[actionName](...args))
      })
    )
