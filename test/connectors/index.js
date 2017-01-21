import { connectValue, connectStateValue, createActionConnector } from '../../src'
import actionCreators from '../wrapper/actionCreators'

const connectAction = createActionConnector(actionCreators)

const textProp = connectValue('Menu', 'text')
const activeProp = connectStateValue(['menu', 'active'])
const onClickProp = connectAction('toggleMenuActiveState', 'onClick')

export {
  textProp,
  activeProp,
  onClickProp
}
