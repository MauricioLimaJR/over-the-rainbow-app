import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
// Custom Components
import BodyContent from './pages/components/BodyContent'
import Footer from './pages/components/Footer'
import Header from './pages/components/Header'
import MapView from './pages/MapView/index'
import Sign from './pages/sign/index'
import NoMatchPage from './pages/components/NoMatchPage'
import Theme from './core/theme'
// Others
import * as colors from './constants/colors'

const StyledCanvas = styled.div`
  background-color: ${colors.darkerWhite};
  color: ${colors.pentaneryGray};
  font-family: !important ${'Roboto, Regular, Helvetica'};
  overflow: hidden;
  text-align: center;
`

function App() {
  return (
    // REACT ROUTER DOM ROOT
    <StyledCanvas className="App">
      <ThemeProvider theme={createMuiTheme(Theme)}>
        <BrowserRouter>
          <Header />
          <BodyContent className="App">
            <Switch>
              <Route exact path='/' component={Sign} />
              <Route exact path='/dashboard' component={MapView} />
              <Route path='/' component={NoMatchPage} />
            </Switch>
          </BodyContent>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </StyledCanvas>
  )
}

export default App;
