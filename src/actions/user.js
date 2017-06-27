import { LAUNCH_API } from '../middleware/launch'

export const LOGIN_IN_REQUEST = 'LOGIN_IN_REQUEST'
export const LOGIN_IN_SUCCESS = 'LOGIN_IN_SUCCESS'
export const LOGIN_IN_FAILURE = 'LOGIN_IN_FAILURE'

const postLogin = data => ({
  [LAUNCH_API]: {
    types: [LOGIN_IN_REQUEST, LOGIN_IN_SUCCESS, LOGIN_IN_FAILURE],
    endpoint: 'auth/login',
    method: 'post',
    data: data,
  },
})

export const loginUser = data => dispatch => {
  return dispatch(postLogin(data))
}
