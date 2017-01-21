import React from 'react'

const ButtonWithText = props =>
  <button
    className={props.active ? 'active' : ''}
    onClick={props.onClick}
  >
    {props.text}
  </button>

export default ButtonWithText
