import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { Header } from 'containers/Header'

jest.mock('react-router')

it('renders without crashing', () => {
  const context = { router: { isActive: () => true } }
  const renderedComponent = shallow(
    <Header to="/home" logout={() => {}} history={{}} />,
    { context },
  )

  expect(renderedComponent.hasClass('active')).toEqual(false)
})

it('renders consistantly[snapshot] without crashing', () => {
  const wrapper = shallow(<Header logout={() => {}} history={{}} />)
  expect(wrapper).toMatchSnapshot()
})
