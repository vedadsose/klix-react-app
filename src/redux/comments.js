import request from 'superagent'
import _ from 'underscore'

export const START_LOAD = 'COMMENTS_START_LOAD'
export const LOAD = 'COMMENTS_LOAD'
export const FAIL = 'COMMENTS_FAIL'
export const RESET = 'COMMENTS_RESET'

export const startLoading = () => {
  return { type: START_LOAD }
}

export const loadedComments = (comments) => {
  return { comments: comments.komentari, nextURL: comments.nextURL, type: LOAD }
}

export const resetCommentsAction = () => {
  return { type: RESET }
}

export const loadComments = (id, lastId) => {
  return dispatch => {
    dispatch(startLoading())

    lastId = lastId ? '?lastID=' + lastId : ''
    request
      .get('https://api.klix.ba/v1/komentari/' + id + lastId)
      .then((res) => {
        dispatch(loadedComments(res.body))
      })
  }
}

export const resetComments = () => {
  return dispatch => dispatch(resetCommentsAction())
}

const defaultState = {
  loading: false,
  loadMore: true,
  comments: []
}

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case START_LOAD:
      return {
        ...state,
        loading: true
      }
    case LOAD:
      return {
        ...state,
        comments: _.uniq([...state.comments, ...action.comments], c => c.id),
        loadMore: action.nextURL !== null,
        loading: false
      }
    case RESET:
      return defaultState
    default:
      return state
  }
}
