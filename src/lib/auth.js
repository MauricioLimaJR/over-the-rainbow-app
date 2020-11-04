import cookie from 'js-cookie'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory({ forceRefresh: true })

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
export const removeToken = () => {
  cookie.remove('token')
  history.push('/')
}