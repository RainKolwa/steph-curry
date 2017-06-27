import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import launch from '../middleware/launch'
import rootReducer from '../reducers'

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, api, launch))

export default configureStore
