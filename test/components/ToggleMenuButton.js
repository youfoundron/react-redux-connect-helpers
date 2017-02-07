import { compose, values } from 'ramda'
import connectors, {immutable as immutableConnectors} from '../connectors'
import ButtonWithText from './ButtonWithText'

const ToggleMenuButton = compose(
  ...values(connectors)
)(ButtonWithText)

const ImmutableToggleMenuButton = compose(
  ...values(immutableConnectors)
)(ButtonWithText)

export default ToggleMenuButton

export const immutable = ImmutableToggleMenuButton
