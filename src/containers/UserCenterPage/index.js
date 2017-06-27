import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, UserHead } from '../../components'
import './style.styl'

const UserCenterMenu = [
  {
    name:'个人信息',
    path:'/my/profile'
  },
  {
    name:'我的简历',
    path:'/my/resume'
  },
  {
    name:'校长信箱',
    path:'/feedback'
  },
  {
    name:'关于我们',
    path:'/about'
  },
]

export class UserCenterPage extends Component {
  render() {
    const { user } = this.props

    return (
      <div>
        {user && <UserHead user={user} />}
        <Menu items={UserCenterMenu} type='UserCenter' />
      </div>
    )
  }
}

export default connect(state => {
  const { user } = state.auth
  return {
    user,
  }
})(UserCenterPage)
