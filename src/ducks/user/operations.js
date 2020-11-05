import * as userActions from './actions'
import * as auth from '../../lib/auth'
// import { _parseApiError } from '../../lib/utils'
import instanceCreator from '../../core/instanceCreator'
import { removeToken } from '../../lib/auth'

const _parseApiError = () => {}

const api = instanceCreator()

/**
 * Fetch logged user data
 */
export const fetchUserData = () => async dispatch => {
  try {
    dispatch(userActions.startLoadingUser())

    // Make api call
    const response = await api.get('/users')
    const { user } = response.data

    dispatch(userActions.login(user))

    // Return user's info
    return user
  } catch (err) {
    throw _parseApiError(err)
  } finally {
    dispatch(userActions.stopLoadingUser())
  }
}

/**
 * Log in users using email and password.
 *
 * @param {string} email - user email
 * @param {string} password - user password
 *
 * @returns {Object} - logged user
 */
export const login = (email, password) => async dispatch => {
  try {
    // Make api call
    const payload = { email, password }
    const response = await api.post('sessions/', payload)

    // Handles response
    const { token, user } = response.data

    if (token) {
      auth.registerToken(token.token)
      dispatch(userActions.setAccessToken(token.token))
    }

    dispatch(userActions.login(user))

    // Returns user's info
    return response.data.payload
  } catch (err) {
    throw _parseApiError(err)
  }
}

/**
 * Updates user default password
 *
 * @param {Object} user - user updated (firstname, lastname or password)
 *
 * @returns {Object} - user
 */
export const updateUserPassword = (user) => async dispatch => {
  try {
    // Make api call
    const response = await api.put('/users', user)

    // Handle response
    const { user } = response.data

    // Return user's info
    return user
  } catch (err) {
    throw _parseApiError(err)
  }
}

export const logoff = router => async dispatch => {
  dispatch(userActions.setAccessToken(''))
  removeToken(router)
}
