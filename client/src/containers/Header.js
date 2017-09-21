import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { logout } from '../actions'

class Header extends Component {
  static propTypes = {
    auth: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired,
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return null
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        )
      default:
        return (
          <li style={{ textDecoration: 'blue' }}>
            <a
              role="menuitem"
              tabIndex="0"
              onClick={event => {
                event.preventDefault()
                this.props.logout(this.props.history)
              }}
            >
              logout
            </a>
          </li>
        )
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/' : '/'}>ZeTiXaR</Link>
          <ul>{this.renderContent()}</ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(auth) {
  return {
    auth,
  }
}
export default connect(mapStateToProps, { logout })(withRouter(Header))
