import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { UserHead } from '../../components'
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
      <div className="page-user-center">
        {user && <UserHead user={user} />}
        <div className="menu-user-center">
        {UserCenterMenu.map(({name, path}, index) =>
          <Link key={index} to={path}>
            {name}<span className="icon"></span>
          </Link>
        )}
        </div>
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
