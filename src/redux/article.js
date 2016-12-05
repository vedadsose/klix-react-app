import request from 'superagent'

export const LOAD = 'ARTICLE_LOAD'
export const FAIL = 'ARTICLE_FAIL'

export const loadedArticle = (article) => {
  return { article, type: LOAD }
}

export const loadArticle = (id) => {
  return dispatch => {
    request
      .get('https://api.klix.ba/v1/clanak/' + id)
      .then((res) => {
        dispatch(loadedArticle(res.body))
      })
  }
}

const defaultState = {
  loading: true
}

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case LOAD:
      return {
        ...state,
        ...action.article,
        loading: false
      }
    default:
      return state
  }
}
