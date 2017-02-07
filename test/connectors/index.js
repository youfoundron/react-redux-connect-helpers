import { connectValue, connectStateValue, createActionConnector } from '../../src'
import { connectStateValue as connectImmutableStateValue } from '../../src/immutable'
import actionCreators from '../wrapper/actionCreators'

const connectAction = createActionConnector(actionCreators)

const textProp = connectValue('Menu', 'text')
const activeProp = connectStateValue(['menu', 'active'])
const onClickProp = connectAction('toggleMenuActiveState', 'onClick')

const immutableActiveProp = connectImmutableStateValue(['menu', 'active'])

export default {
  textProp,
  activeProp,
  onClickProp
}

export const immutable = {
  textProp,
  activeProp: immutableActiveProp,
  onClickProp
}
