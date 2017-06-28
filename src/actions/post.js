import { CALL_API } from '../middleware/api'
import { Schemas } from '../middleware/schemas'

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE'

const fetchPostList = (query, nextPageUrl) => ({
  query,
  [CALL_API]: {
    types: [LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE],
    endpoint: nextPageUrl,
    schema: Schemas.POST_ARRAY,
  },
})

export const loadPostList = (query, nextPage) => (dispatch, getState) => {
  const { nextPageUrl = query, pageCount = 0 } =
    getState().pagination.allposts[query] || {}

  if (pageCount > 0 && !nextPage) {
    return null
  }

  return dispatch(fetchPostList(query, nextPageUrl))
}
