import { combineReducers } from 'redux'
// Custom files
// import reducerRegistry from '../../lib/reducerRegistry'
import * as types from './types'

const loggedUserReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return action.user
    default:
      return state
  }
}

const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case types.SET_ACCESS_TOKEN:
      return action.token
    default:
      return state
  }
}

const loadingUserReducer = (state = false, action) => {
  switch (action.type) {
    case types.START_LOADING_USER:
      return true
    case types.STOP_LOADING_USER:
      return false
    default:
      return state
  }
}

export const userReducer = combineReducers({
  logged: loggedUserReducer,
  loading: loadingUserReducer,
  token: tokenReducer,
})

// reducerRegistry.save('user', userReducer)

export default { userReducer }
