import R from 'ramda'
import types from './actionTypes'
import initialState from './initialState'

const menuActivePathArray = ['menu', 'active']

const setValue = pathArray => state => value =>
  state.setIn(pathArray, value)

const getValue = pathArray => state =>
  state.getIn(pathArray)

const toggleValue = pathArray => state => R.compose(
  setValue(pathArray)(state),
  R.not,
  getValue(pathArray)
)(state)

const toggleMenuActiveValue = toggleValue(menuActivePathArray)

export default (state = initialState, action) => {
  switch (action.type) {
    case (types.TOGGLE_MENU_ACTIVE_STATE):
      return toggleMenuActiveValue(state)
    default:
      return state
  }
}
