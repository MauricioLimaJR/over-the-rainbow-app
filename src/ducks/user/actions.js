import * as types from './types'

export const login = user => ({
  type: types.LOGIN,
  user,
})

export const setAccessToken = token => ({
  type: types.SET_ACCESS_TOKEN,
  token,
})

export const startLoadingUser = () => ({
  type: types.START_LOADING_USER,
})

export const stopLoadingUser = () => ({
  type: types.STOP_LOADING_USER,
})
