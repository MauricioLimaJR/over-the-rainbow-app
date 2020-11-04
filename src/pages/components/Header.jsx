import React from 'react'
import styled from 'styled-components'
import { useHistory, Link } from "react-router-dom"
// Material-UI
import { Grid, withStyles } from '@material-ui/core'
// Others
import * as colors from '../../constants/colors'

const HeaderContainer = styled(Grid)`
  background-color: ${colors.brinkPink};
  height: 8vh;

  p {
    color: ${colors.white};
    font-weight: bold;
    font-size: 2rem;
  }
  a {
    text-decoration: none;
  }
`

const Header = () => {
  const history = useHistory()
  const show = () => history.location.pathname !== '/'
    ? {} : { display: 'none' }

  return (
    <HeaderContainer
      container
      justify={'center'}
      alignContent={'center'}
      style={{ ...show()}}
    >
      <Grid item xs>
        <Link to='/'>
          <p>Over The Rainbow</p>
        </Link>
      </Grid>
    </HeaderContainer>
  )
}

export default Header
