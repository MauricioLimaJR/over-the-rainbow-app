import axios from 'axios'
import getConfig from 'next/config'
import * as auth from '../lib/auth'

const { publicRuntimeConfig } = getConfig()

const APP_URL =
  publicRuntimeConfig.NODE_ENV === 'development'
    ? publicRuntimeConfig.NEXT_PUBLIC_DEV_BASE_URL
    : publicRuntimeConfig.NEXT_PUBLIC_PROD_BASE_URL

/**
 * Create a new Axios instance
 * @see https://github.com/mzabriskie/axios#creating-an-instance
 */
const instanceCreator = (baseUrl = null) => {
  // Create the interceptors callbacks
  const requestInterceptorSuccess = config => {
    console.log('requestInterceptorSuccess')
    const token = auth.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  }

  // Create instance and set up interceptors
  const instance = axios.create({ baseURL: baseUrl || APP_URL })

  instance.interceptors.request.use(
    requestInterceptorSuccess,
  )

  return instance
}

export default instanceCreator
