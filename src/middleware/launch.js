import configs from '../configs'
const { api: API_ROOT } = configs

const callApi = (endpoint, data, method, headers) => {
  const fullUrl = endpoint.indexOf(API_ROOT) === -1
    ? API_ROOT + endpoint
    : endpoint

  return fetch(fullUrl, {
    method,
    headers: headers || {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      return Object.assign({}, json)
    }),
  )
}

export const LAUNCH_API = 'Call API2'

export default store => next => action => {
  const callAPI = action[LAUNCH_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { types, data, method, headers } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[LAUNCH_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint, data, method, headers).then(
    response =>
      next(
        actionWith({
          response,
          type: successType,
        }),
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || 'Something bad happened',
        }),
      ),
  )
}
