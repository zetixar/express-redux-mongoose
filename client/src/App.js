import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
import Routes from 'routes'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default connect(null, actions)(App)
