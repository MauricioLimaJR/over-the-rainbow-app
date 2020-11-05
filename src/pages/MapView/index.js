import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
import Map from '../components/Map'
// Others
import * as colors from '../../constants/colors'

const Container = styled(Grid)`
  margin: 1rem;
  padding: 1rem 1rem;
  max-width: 800px;
  height: 100%;
  background-color: ${colors.white};
`

const MapView = (props) => {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: -8.062230,
    lng: -34.870927,
  } //

  return(
    <Container container>
      <Grid item xs={12}>
        <Map
        google={props.google}
        center={{lat: -8.062230, lng: -34.870927}}
        height='90%'
        zoom={15}
        />
      </Grid>
    </Container>
  )
}

export default MapView