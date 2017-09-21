import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'

import { logout } from '../actions'

const HeaderSection = styled.div`
  background-color: #181818;
  padding: 15px;
  height: 75px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 48px;
  color: #e1c348;
`

const AuthActionList = styled.ul`
  list-style-type: none;
  margin: 0px;
`

class Header extends Component {
  /*
  auth propTypes: there are three possibilites [
      null -> when app doesn't get any response back from server
      false -> when app gets falsy response back from server
      object(user info) -> when user gets authenticated successfully
    ]

  history propTypes: has to be an object with PropTypes.historyShape but I
  couldn't find the correct api for that. I need to fix that later

  */
  static propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
    history: PropTypes.shape().isRequired,
  }

  static defaultProps = {
    auth: null,
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return null
      case false:
        return (
          <li>
            <a className="btn" href="/auth/google">
              Login with Google
            </a>
          </li>
        )
      default:
        return (
          <li>
            <span style={{ marginRight: '15px' }}>
              Welcome {this.props.auth.givenName}!
            </span>
            <a
              className="btn"
              style={{ cursor: 'pointer' }}
              role="menuitem"
              tabIndex="0"
              onClick={event => {
                event.preventDefault()
                this.props.logout(this.props.history)
              }}
            >
              Logout
            </a>
          </li>
        )
    }
  }
  render() {
    return (
      <nav>
        <HeaderSection className="nav-wrapper">
          <LogoLink to={this.props.auth ? '/' : '/'}>ZeTiXaR</LogoLink>
          <AuthActionList>{this.renderContent()}</AuthActionList>
        </HeaderSection>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  }
}
export default connect(mapStateToProps, { logout })(withRouter(Header))
