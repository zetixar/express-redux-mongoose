import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from 'containers/Header'

it('2 + 2 = 4', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
})
