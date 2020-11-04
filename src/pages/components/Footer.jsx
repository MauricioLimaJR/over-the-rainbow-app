import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid, Divider } from '@material-ui/core'
// Others
import * as colors from '../../constants/colors'

const StyledGrid = styled(Grid)`
  background-color: ${colors.brinkPink};
  color: ${colors.athensGray};
  height: 6vh;
`

const Footer = props => {
  return (
    <StyledGrid
      container
      justify={'center'}
      alignItems={'center'}
      {...props}
    >
      <Grid item xs={12}>
        <label><i>Over The Rainbow 2020 &copy;</i></label>
      </Grid>
    </StyledGrid>
  )
}

export default Footer
