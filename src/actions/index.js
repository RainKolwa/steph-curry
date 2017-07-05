import { LAUNCH_API } from '../middleware/launch'

// 预约
export const SUBMIT_RESERVE_REQUEST = 'SUBMIT_RESERVE_REQUEST'
export const SUBMIT_RESERVE_SUCCESS = 'SUBMIT_RESERVE_SUCCESS'
export const SUBMIT_RESERVE_FAILURE = 'SUBMIT_RESERVE_FAILURE'

const handleSubmitReservation = data => ({
  [LAUNCH_API]: {
    types: [
      SUBMIT_RESERVE_REQUEST,
      SUBMIT_RESERVE_SUCCESS,
      SUBMIT_RESERVE_FAILURE,
    ],
    endpoint: 'reserve',
    method: 'post',
    data: data,
  },
})

export const submitReservation = data => dispatch => {
  return dispatch(handleSubmitReservation(data))
}

// 获取短信验证码
export const SMS_CODE_REQUEST = 'SMS_CODE_REQUEST'
export const SMS_CODE_SUCCESS = 'SMS_CODE_SUCCESS'
export const SMS_CODE_FAILURE = 'SMS_CODE_FAILURE'

const fetchSmsCode = data => ({
  [LAUNCH_API]: {
    types: [SMS_CODE_REQUEST, SMS_CODE_SUCCESS, SMS_CODE_FAILURE],
    endpoint: 'user/sms',
    method: 'post',
    data: data,
  },
})

export const getSmsCode = data => dispatch => {
  return dispatch(fetchSmsCode(data))
}

// 结果
export const LOAD_RESULT_REQUEST = 'LOAD_RESULT_REQUEST'
export const LOAD_RESULT_SUCCESS = 'LOAD_RESULT_SUCCESS'
export const LOAD_RESULT_FAILURE = 'LOAD_RESULT_FAILURE'

const fetchResult = data => ({
  [LAUNCH_API]: {
    types: [LOAD_RESULT_REQUEST, LOAD_RESULT_SUCCESS, LOAD_RESULT_FAILURE],
    endpoint: 'result',
    method: 'get',
    data: data,
  },
})

export const LoadResult = data => dispatch => {
  return dispatch(fetchResult(data))
}

// 补充信息
export const SUBMIT_ADDITIONAL_REQUEST = 'SUBMIT_ADDITIONAL_REQUEST'
export const SUBMIT_ADDITIONAL_SUCCESS = 'SUBMIT_ADDITIONAL_SUCCESS'
export const SUBMIT_ADDITIONAL_FAILURE = 'SUBMIT_ADDITIONAL_FAILURE'

const handleSubmitAdditional = data => ({
  [LAUNCH_API]: {
    types: [
      SUBMIT_ADDITIONAL_REQUEST,
      SUBMIT_ADDITIONAL_SUCCESS,
      SUBMIT_ADDITIONAL_FAILURE,
    ],
    endpoint: 'reserve',
    method: 'post',
    data: data,
  },
})

export const submitAdditional = data => dispatch => {
  return dispatch(handleSubmitAdditional(data))
}

// 提示信息
export const REMOVE_SNACK_MESSAGE = 'REMOVE_SNACK_MESSAGE'
export const ADD_SNACK_MESSAGE = 'ADD_SNACK_MESSAGE'

export const removeStackMessage = () => ({
  type: REMOVE_SNACK_MESSAGE,
})

export const addStackMessage = data => ({
  type: ADD_SNACK_MESSAGE,
  data,
})
