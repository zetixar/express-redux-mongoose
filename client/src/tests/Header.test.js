import React from 'react'
import ReactDOM from 'react-dom'
import { HeaderTest } from 'containers'

it('2 + 2 = 4', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeaderTest />, div)
})
