import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Wrapper from './wrapper/'
import { mount } from 'enzyme'

import ButtonWithText from './components/ButtonWithText'
import ToggleMenuButton from './components/ToggleMenuButton'

chai.use(chaiEnzyme())

const wrapper = mount(
  <Wrapper>
    <ToggleMenuButton />
  </Wrapper>
)

const connectedComponent = wrapper.find(ButtonWithText).first()

describe('jsDom', () => {
  describe('#window', () => {
    it('should exist in global scope', () => {
      expect(window).to.exist
    })

    it('should be merged into global scope', () => {
      const windowKeys = Object.keys(window)
      expect(global).to.have.any.keys(windowKeys)
    })
  })

  describe('#document', () => {
    it('should exist in global scope', () => {
      expect(document).to.exist
    })

    it('should be queryable', () => {
      const e = document.getElementById('react-app')
      expect(e).to.exist
    })
  })
})

describe('react-redux-connect-helpers', () => {
  it('should connect specified props', () => {
    expect(connectedComponent).to.have.props(['text', 'active', 'onClick'])
  })

  describe('#connectStateValue', () => {
    it('should connect specified value as property', () => {
      expect(connectedComponent).to.have.prop('active').equal(false)
    })
  })

  describe('#connectValue', () => {
    it('should connect specified value as property', () => {
      expect(connectedComponent).to.have.prop('text').equal('Menu')
    })
  })

  describe('#createActionConnector', () => {
    it('should connect specified action as property', () => {
      expect(connectedComponent.node.props.onClick).to.be.a('function')
    })

    it('should have connected action work as expected', () => {
      // call action
      connectedComponent.node.props.onClick()
      expect(connectedComponent).to.have.prop('active').equal(true)
    })
  })
})
