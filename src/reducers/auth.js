import * as ActionTypes from '../actions'
import { getItem } from '../utils'

export default function auth(
  state = {
    user: getItem('user') ? JSON.parse(getItem('user')) : null,
    loggedIn: getItem('token') ? true : false,
    loggingIn: false,
  },
  action,
) {
  const { type } = action
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loggingIn: true,
      })
    case ActionTypes.LOGIN_SUCCESS:
      const user = action.response.entities.users[action.response.result]
      return Object.assign({}, state, {
        loggingIn: false,
        user: user,
        loggedIn: true,
      })
    case ActionTypes.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loggingIn: false,
        user: null,
        loggedIn: false,
      })
    case ActionTypes.UPDATE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        user: action.response.entities.users[action.response.result],
      })
    default:
      return state
  }
}
