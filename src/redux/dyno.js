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
        console.log(dispatch)
        dispatch(loadedDyno(res.body))
      })
  }
}

const defaultState = {
  loading: false,
  articles: []
}

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case LOAD:
      return {
        ...state,
        articles: action.articles
      }
    default:
      return state
  }
}
