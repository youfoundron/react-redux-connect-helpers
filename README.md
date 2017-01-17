# React Redux Connect Helpers

A helpful set of functions for connecting redux state to react components.  
Compose your connectors at will and build the connected component of your dreams... 😴

[![Dependency Status](https://david-dm.org/rongierlach/react-redux-connect-helpers.svg)](https://david-dm.org/rongierlach/react-redux-connect-helpers) [![devDependency Status](https://david-dm.org/rongierlach/react-redux-connect-helpers/dev-status.svg)](https://david-dm.org/rongierlach/react-redux-connect-helpers#info=devDependencies)
## Installation

`$ npm install react-redux-connect-helpers`

## Usage
```javascript
import React from 'react'
import { compose } from 'react-redux'
import {
  connectValue,
  connectStateValue,
  createActionConnector
} from 'react-redux-connect-helpers'

// 1. Given a component we wish to connect to state
const ButtonWithText = props =>
  <button
    className={props.active ? 'active' : ''}
    onClick={props.onClick}
  >
    {props.text}
  </button>

// 2. And action creators to be bound to dispatch (optional)
const actionCreators = {
  toggleMenuActiveState: () => ({
    type: 'TOGGLE_MENU_ACTIVE_STATE',
    payload: null
  })
}

// 3. We can connect property 'text' as value 'Menu'
const textPropConnector = connectValue('Menu', 'text')

// 4. We can connect property 'active' as value at state.menu.active
const activePropConnector = connectValueInState(['menu', 'active'], 'active')

// 5. We can create an action connecting helper for our actionCreators
const connectAction = createActionConnector(actionCreators)

// 6. And then connect property 'onClick' as a bound action creator toggleMenuActiveState
const onClickPropConnector = connectAction('toggleMenuActiveState', 'onClick')

// 7. Finally, we can connect our component with all the desired props
const ToggleMenuButton = compose(
  textPropConnector
  activePropConnector,
  onClickPropConnector
)(ButtonWithText)

export default ToggleMenuButton
```
## API Reference

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### connectStateValue

Returns a function that connects a value in state to a React component as a prop

**Parameters**

-   `pathArray` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))**
-   `propName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `transformValue` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**

**Examples**

```javascript
const BandContainer = compose(
  connectStateValue('name'),
  connectStateValue(['musicians'], 'members'),
  connectStateValue(
    ['discography', 'albumsByYear'],
    'firstThreeAlbums',
    (albumsByYear, state) => albumsByYear.slice(0, 3)
  )
)(BandComponent)
```

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Connected component class

### connectValue

Returns a function that connects a value to a React component as a prop

**Parameters**

-   `value` **any**
-   `propName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

**Examples**

```javascript
const TitleContainer = compose(
  connectValue('purple', 'color'),
  connectValue('You\'re Living All Over Me', 'title')
)(TitleComponent)
```

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Connected component class

### createActionConnector

A higher order function that returns a function to connect bound actions to React components as props

**Parameters**

-   `actionCreators` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**

**Examples**

```javascript
const actionCreators = { purchaseAlbum, ... }
const connectAction = createActionConnector(actionCreators)
const PurchaseButton = compose(
  connectAction('purchaseAlbum', 'onClick')
)(ButtonComponent)
```

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Helper to connect an action
