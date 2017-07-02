import * as ActionTypes from '../actions'

export default function result(
  state = {
    fetching: false,
    players: [],
  },
  action
) {
  const { type } = action
  switch (type) {
    case ActionTypes.LOAD_RESULT_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      })
    case ActionTypes.LOAD_RESULT_SUCCESS:
      const data = action.response.players[action.response.result]
      return Object.assign({}, state, {
        fetching: false,
        players: data,
      })
    case ActionTypes.LOAD_RESULT_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
      })
    default:
      return state
  }
}
