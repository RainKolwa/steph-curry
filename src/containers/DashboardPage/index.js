import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, UserHead, RecommendItem } from '../../components'
import TaskBoard from '../TaskBoard'
import PostList from '../PostList'
import './style.styl'

export class DashboardPage extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="page-dashboard">
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
