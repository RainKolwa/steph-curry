import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App } from './containers'
import { DashboardPage, UserCenterPage, LoginPage, ProfilePage, AboutUsPage } from './containers/'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage} />
    <Route path="login" component={LoginPage} />
    <Route path="my" component={UserCenterPage} />
    <Route path="my/profile" component={ProfilePage} />
    <Route path="about" component={AboutUsPage} />
  </Route>
)
