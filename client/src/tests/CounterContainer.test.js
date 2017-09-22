import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { CounterContainer } from 'containers/CounterContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CounterContainer
      increment={() => {}}
      decrement={() => {}}
      incrementIfOdd={() => {}}
      counter={0}
    />,
    div,
  )
})

it('renders consistantly[snapshot] without crashing', () => {
  const wrapper = shallow(
    <CounterContainer
      increment={() => {}}
      decrement={() => {}}
      incrementIfOdd={() => {}}
      counter={0}
    />,
  )
  expect(wrapper).toMatchSnapshot()
})
