import { normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
const apiRoot = process.env.REACT_APP_API_ROOT

// Extracts the next page URL from Github API response.
const getNextPageUrl = response => {
  const link = response.headers.get('link')
  if (!link) {
    return null
  }

  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1)
  if (!nextLink) {
    return null
  }

  return nextLink.split(';')[0].slice(1, -1)
}

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (endpoint, schema, method, headers, data) => {
  const fullUrl =
    endpoint.indexOf(apiRoot) === -1 ? apiRoot + endpoint : endpoint

  return fetch(fullUrl, {
    method: method || 'get',
    headers: headers || {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response =>
    response.json().then(json => {
      if (json.code !== 0) {
        return Promise.reject(json)
      }

      const camelizedJson = camelizeKeys(json.data)
      const nextPageUrl = getNextPageUrl(response)

      return Object.assign({}, normalize(camelizedJson, schema), {
        nextPageUrl,
      })
    })
  )
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types, method, headers, data } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint, schema, method, headers, data).then(
    response =>
      next(
        actionWith({
          response,
          type: successType,
        })
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.msg || 'Something bad happened',
        })
      )
  )
}
