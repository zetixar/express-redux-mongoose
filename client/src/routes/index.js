import React from 'react'
import { CounterContainer, Header } from 'containers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`padding: 15px;`

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        {/* static/client side page */}
        <Route path="/" component={CounterContainer} />
        {/* dynamic/server relying page */}
        {/* <Route path="/todos" component={Todos} /> */}
        {/* <Redirect from="/" to="/todos" /> */}
      </Container>
    </Router>
  )
}

export default Routes
