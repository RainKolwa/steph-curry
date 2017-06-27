export * from './user'

import { CALL_API } from '../middleware/api'

import { Schemas } from '../middleware/schemas'

export const LOAD_TASKS_REQUEST = 'LOAD_TASKS_REQUEST'
export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS'
export const LOAD_TASKS_FAILURE = 'LOAD_TASKS_FAILURE'

const fetchTasks = (query, nextPageUrl) => ({
  query,
  [CALL_API]: {
    types: [LOAD_TASKS_REQUEST, LOAD_TASKS_SUCCESS, LOAD_TASKS_FAILURE],
    endpoint: nextPageUrl,
    schema: Schemas.TASK_ARRAY,
  },
})

export const loadTasks = (query, nextPage) => (dispatch, getState) => {
  const { nextPageUrl = `my/tasks`, pageCount = 0 } =
    getState().pagination.tasks[query] || {}

  if (pageCount > 0 && !nextPage) {
    return null
  }

  return dispatch(fetchTasks(query, nextPageUrl))
}

export const REMOVE_SNACK_MESSAGE = 'REMOVE_SNACK_MESSAGE'
export const ADD_SNACK_MESSAGE = 'ADD_SNACK_MESSAGE'

export const removeStackMessage = () => ({
  type: REMOVE_SNACK_MESSAGE,
})

export const addStackMessage = data => ({
  type: ADD_SNACK_MESSAGE,
  data,
})
