import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
import Map from '../components/Map'
import SavePlaceModal from '../components/modals/SavePlaceModal'
// Others
import { getPlaces } from '../../lib/placeAPI'
import * as colors from '../../constants/colors'

const Container = styled(Grid)`
  margin: 1rem;
  padding: 1rem 1rem;
  max-width: 800px;
  height: 100%;
  background-color: ${colors.white};
`

const MapView = (props) => {
  const [open, setOpen] = React.useState(false)
  const [place, setPlace] = React.useState({})
  const [markers, setMarkers] = React.useState([])
  const [position, setPosition] = React.useState({
    lat: -8.062230,
    lng: -34.870927
  })

  React.useEffect(() => {
    (async () => {
      let markers = []

      if (position) {
        const response = await getPlaces(position.lat, position.lng)
        markers.push(...response)
      }
      else{
        // const markers = await getPlaces(position.lat, position.lng)
      }
      setMarkers(markers)
    })()
    console.log('mudouuu')
  }, [position])

  const handleRegiterPlace = (placeData) => {
    setPlace(placeData)
    setOpen(true)
  }

  return(
    <Container container>
      <SavePlaceModal
        open={open}
        handleClose={() => setOpen(false)}
        place={place}
      />
      <Grid item xs={12}>
        <Map
          google={props.google}
          center={position || {
            lat: -8.062230,
            lng: -34.870927
          }}
          height='90%'
          zoom={15}
          handleRegiterPlace={handleRegiterPlace}
          handlePositionChange={data => setPosition(data)}
        />
      </Grid>
    </Container>
  )
}

export default MapView