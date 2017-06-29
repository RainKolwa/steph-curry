import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Menu, UserHead, RecommendItem } from '../../components'
import TaskBoard from '../../containers/TaskBoard'
import PostList from '../../containers/PostList'
import './style.styl'

export class DashboardPage extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="page-dashboard">
        <Helmet>
          <title>学习计划</title>
        </Helmet>
        <Menu />
        {user && <UserHead user={user} />}
        <TaskBoard limit={3} />
        <PostList path="inbox" infinite>
          <RecommendItem />
        </PostList>
      </div>
    )
  }
}

export default connect(state => {
  const { user } = state.auth
  return {
    user,
  }
})(DashboardPage)
