import { compose } from 'ramda'
import { textProp, activeProp, onClickProp } from '../connectors'
import ButtonWithText from './ButtonWithText'

const ToggleMenuButton = compose(
  textProp,
  activeProp,
  onClickProp
)(ButtonWithText)

export default ToggleMenuButton
