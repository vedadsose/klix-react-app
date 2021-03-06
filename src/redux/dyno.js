import request from 'superagent'

export const LOAD = 'DYNO_LOAD'
export const FAIL = 'DYNO_FAIL'

export const loadedDyno = (articles) => {
  return { articles, type: LOAD }
}

export const loadDyno = () => {
  return dispatch => {
    request
      .get('https://api.klix.ba/v1/dinamicna')
      .then((res) => {
        dispatch(loadedDyno(res.body))
      })
  }
}

const defaultState = {
  loading: true,
  articles: []
}

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case LOAD:
      return {
        ...state,
        articles: action.articles,
        loading: false
      }
    default:
      return state
  }
}
