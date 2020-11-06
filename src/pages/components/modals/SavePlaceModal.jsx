import React from 'react'
import styled from 'styled-components'
// Material-UI
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Dialog,
  DialogContent,
  DialogContentText,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
// Custom components
import { Form } from "../../sign/components/styles"
// Others
import { savePlace, saveRating } from '../../../lib/placeAPI'
// import Toast from '../../../lib/toastfy'

const CustomDialog = withStyles(theme => ({
  root: {
    textAlign: 'center',
  }
}))(Dialog)

const Title = styled.span`
  font-size: 1.5rem;
`

const Close = styled.span`
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

// const Subtitle 

const SavePlaceModal = ({
  open,
  handleClose,
  place
}) => {
  const [title, setTitle] = React.useState('')
  const [score, setScore] = React.useState(null)
  const [ratingDesc, setRatingDesc] = React.useState(null)
  const [error, setError] = React.useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    if (!title) {
      setError('Preencha ao menos o nome e descrição do local ;)')
    } else {
      try {
        setError(null)

        const placeData = { 
          title,
          address: place.address,
          latitude: place.latitude,
          longitude: place.longitude
        }

        const placeResponse = await savePlace(placeData)
        console.log(placeResponse)
        const place_id = placeResponse.id

        if (place_id && score) {
          const rating = { place_id, score, description: ratingDesc }  
          await saveRating(rating)
        }

        // onSubmit()
      } catch (err) {
        console.log(err)
        // Toast.error('Algum erro aconteceu..')
      }
    }
  }

  return (
    <CustomDialog
      open={open}
      aria-labelledby="customized-dialog-title"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Close onClick={handleClose}>X</Close>

              <Grid item xs={12}>
                {/* <img src={Logo} alt="Over The Rainbow logo" /> */}
              </Grid>
        
              <Grid item xs={12}>
                <Title>Salve esse local</Title>
              </Grid>

              {error && <p>{error}</p>}
        
              {/* About the place */}
              <Grid item xs={12}>
                <input
                  placeholder="Nome*"
                  onChange={e => setTitle(e.target.value)}
                />
              </Grid>
              
              {/* END - About the place */}
        
              {/* About the Rating */}
              <Grid item xs={12}>
                <Title>Avalie o local</Title>
              </Grid>

              <Grid item xs={12}>
                <Rating
                  name="score"
                  defaultValue={0}
                  onChange={e => setScore(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <input
                  placeholder="Comentário"
                  onChange={e => setRatingDesc(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <button type="submit">Salvar</button>
              </Grid>
            </Grid>
          </Form>  
        </DialogContentText>
      </DialogContent>
    </CustomDialog>
  )
}
export default SavePlaceModal
