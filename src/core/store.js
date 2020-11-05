import { createStore, applyMiddleware } from 'redux'
import { userReducer as Reducers } from '../ducks/user/reducers'
import freeze from 'redux-freeze'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

// State
const defaultInitialState = {}

const middlewares = [freeze, logger, promise, thunk]

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })

export const Store = createStore(
  Reducers,
  defaultInitialState,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default Store