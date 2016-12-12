import request from 'superagent'

export const LOAD = 'ARTICLE_LOAD'
export const FAIL = 'ARTICLE_FAIL'
export const RESET = 'ARTICLE_RESET'

export const loadedArticle = (article) => {
  return { article, type: LOAD }
}

export const resetArticleAction = () => {
  return { type: RESET }
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

export const resetArticle = () => {
  return dispatch => dispatch(resetArticleAction())
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
    case RESET:
      return defaultState
    default:
      return state
  }
}
