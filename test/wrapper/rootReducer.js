import R from 'ramda'
import types from './actionTypes'
import initialState from './initialState'

const menuLens = R.lensProp('menu')
const menuActiveLens = R.compose(
  menuLens,
  R.lensProp('active')
)

const toggleValue = lens => state => R.compose(
  R.set(lens, R.__, state),
  R.not,
  R.view(lens)
)(state)

const toggleMenuActiveValue = toggleValue(menuActiveLens)

export default (state = initialState, action) => {
  switch (action.type) {
    case (types.TOGGLE_MENU_ACTIVE_STATE):
      return toggleMenuActiveValue(state)
    default:
      return state
  }
}
