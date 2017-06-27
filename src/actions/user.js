import { LAUNCH_API } from '../middleware/launch'

export const LOGIN_IN_REQUEST = 'LOGIN_IN_REQUEST'
export const LOGIN_IN_SUCCESS = 'LOGIN_IN_SUCCESS'
export const LOGIN_IN_FAILURE = 'LOGIN_IN_FAILURE'

const postLogin = data => ({
  [LAUNCH_API]: {
    types: [LOGIN_IN_REQUEST, LOGIN_IN_SUCCESS, LOGIN_IN_FAILURE],
    endpoint: 'user/signIn',
    method: 'post',
    data: data,
  },
})

export const loginUser = data => dispatch => {
  return dispatch(postLogin(data))
}

export const SMS_CODE_REQUEST = 'SMS_CODE_REQUEST'
export const SMS_CODE_SUCCESS = 'SMS_CODE_SUCCESS'
export const SMS_CODE_FAILURE = 'SMS_CODE_FAILURE'

const fetchSmsCode = data => ({
  [LAUNCH_API]: {
    types: [SMS_CODE_REQUEST, SMS_CODE_SUCCESS, LOGIN_IN_FAILURE],
    endpoint: 'user/sms',
    method: 'post',
    data: data,
  },
})

export const getSmsCode = data => dispatch => {
  return dispatch(fetchSmsCode(data))
}
