import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App } from './containers'
import {
  IndexPage,
  ReservePage,
  LoginPage,
  GamePage,
  ResultPage,
} from './views'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="reserve" component={ReservePage} />
    <Route path="login" component={LoginPage} />
    <Route path="result" component={ResultPage} />
    <Route path="game" component={GamePage} />
  </Route>
)
