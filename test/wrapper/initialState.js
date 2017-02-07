import { fromJS } from 'immutable'

const initialState = {
  menu: {
    active: false
  }
}

export default initialState
export const immutable = fromJS(initialState)
