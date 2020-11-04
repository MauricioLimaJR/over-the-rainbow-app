/* eslint-disable no-param-reassign */
import axios from 'axios'
import * as auth from '../lib/auth'

const publicRuntimeConfig = process.env

const APP_URL = publicRuntimeConfig.NODE_ENV === 'development'
  ? publicRuntimeConfig.REACT_APP_DEV_BASE_URL 
  : publicRuntimeConfig.REACT_APP_PROD_BASE_URL

/**
 * Create a new Axios instance
 * @see https://github.com/mzabriskie/axios#creating-an-instance
 */
const instanceCreator = (baseUrl = null) => {
  const instance = axios.create({ baseURL: baseUrl || APP_URL })

  instance.interceptors.request.use(config => {
    const token = auth.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
  })

  return instance
}

export default instanceCreator
