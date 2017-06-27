import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import concat from 'lodash/concat'
import slice from 'lodash/slice'
import paginate from './paginate'
import auth from './auth'

const entities = (state = { users: {}, tasks: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

const snackMessages = (state = [], action) => {
  const { type, error } = action

  if (type === ActionTypes.ADD_SNACK_MESSAGE) {
    const { type: messageType, content } = action.data
    return concat({ type: messageType, content, createdAt: +new Date() }, state)
  } else if (type === ActionTypes.REMOVE_SNACK_MESSAGE) {
    return slice(state, 0, -1)
  } else if (error) {
    return concat(
      { type: 'failure', content: error, createdAt: +new Date() },
      state,
    )
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
  snackMessages,
  entities,
  pagination,
  routing,
})

export default rootReducer
