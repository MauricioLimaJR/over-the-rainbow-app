/**
 * @file
 * Exports several functions that help deal with user authorization process.
 */
import cookie from 'js-cookie'

/**
 * Register a user token to be used as authorization.
 * @param {string} token - JWT token to register.
 */
export const registerToken = token => {
  cookie.set('token', token)
}

/**
 * Recover a user token to be used as authorization.
 * @returns {string|undefined} - The use token if it exists.
 */
export const getToken = () => cookie.get('token')

/**
 * Unregister user token and triggers a logout event listened by other browser
 * tabs.
 */
export const removeToken = router => {
  cookie.remove('token')
  router.push('/')
}
