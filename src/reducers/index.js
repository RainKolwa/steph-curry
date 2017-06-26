import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import paginate from './paginate'
import auth from './auth'

const entities = (state = { users: {}, tasks: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

const pagination = combineReducers({
  tasks: paginate({
    mapActionToKey: action => action.login,
    types: [
      ActionTypes.LOAD_TASKS_REQUEST,
      ActionTypes.LOAD_TASKS_SUCCESS,
      ActionTypes.LOAD_TASKS_FAILURE,
    ],
  }),
})

const rootReducer = combineReducers({
  auth,
  entities,
  pagination,
  routing,
})

export default rootReducer
