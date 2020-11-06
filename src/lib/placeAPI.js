import instanceCreator from '../core/instanceCreator'

const api = instanceCreator()

export const getPlaces = async (lat, lng) => {
  try {
    const response = await api.get(`/places/?latitude=${lat}&longitude=${lng}`)

    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const savePlace = async data => {
  try {
    const response = await api.post('/places', data)

    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const saveRating = async data => {
  try {
    await api.post('/ratings', data)

    return true
  } catch (err) {
    console.error(err)
  }
}