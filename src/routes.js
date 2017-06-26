import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App } from './containers'
import {
   DashboardPage,
   UserCenterPage
} from './containers/'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage} />
    <Route path="my" component={UserCenterPage} />
  </Route>
)
