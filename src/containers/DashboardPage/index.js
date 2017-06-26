import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Menu, UserHead } from '../../components'
import './style.styl'

@connect(
  state => {
    const { user } = state.auth
    return {
      user,
    }
  },
  dispatch => bindActionCreators({}, dispatch),
)
class DashboardPage extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <Menu />
        {user && <UserHead user={user} />}
      </div>
    )
  }
}

export default DashboardPage
