import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Material-UI
import { withStyles } from '@material-ui/core/styles'
// Custom Settings
import * as colors from './constants/colors'
import theme from './core/theme'

const Styled = {}
const styles = () => {
  Styled.Canvas = styled.div`
    background-color: ${colors.athensGray};
    font-family: !important ${'CircularStd, Helvetica'};
    text-align: center;
  `
}

function App() {
  return (
    // REACT ROUTER DOM ROOT
    <ThemeProvider theme={theme}>
      <Styled.Canvas
        className="App"
      >
        <BrowserRouter>
          <Header />
          <BodyContent>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/start" component={Dashboard} />
              <Route path="/" component={NoMatchPage} />
            </Switch>
          </BodyContent>
        </BrowserRouter>
        <Footer />
      </Styled.Canvas>
    </ThemeProvider>
  )
}

export default withStyles(styles)(App)
