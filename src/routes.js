import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import ArticleContainer from './containers/ArticleContainer'

export default (store, history) => {
  return <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="/article/:id" component={ArticleContainer} />
      </Route>
    </Router>
  </Provider>
}
