import R from 'ramda'
import types from './actionTypes'
import initialState, { immutable as _initialState } from './initialState'

const menuActivePathArray = ['menu', 'active']

const makeReducer = helpers => (state, action) => {
  switch (action.type) {
    case (types.TOGGLE_MENU_ACTIVE_STATE):
      return helpers.toggleMenuActiveValue(state)
    default:
      return state
  }
}

// default reducer
const menuActiveLens = R.lensPath(menuActivePathArray)

const toggleValue = lens => state => R.compose(
  R.set(lens, R.__, state),
  R.not,
  R.view(lens)
)(state)

export default makeReducer({
  toggleMenuActiveValue: toggleValue(menuActiveLens)
}, initialState)

// immutable reducer
const _set = pathArray => state => value =>
  state.setIn(pathArray, value)

const _view = pathArray => state =>
  state.getIn(pathArray)

const _toggleValue = pathArray => state => R.compose(
  _set(pathArray)(state),
  R.not,
  _view(pathArray)
)(state)

export const immutable = makeReducer({
  toggleMenuActiveValue: _toggleValue(menuActivePathArray)
}, _initialState)
