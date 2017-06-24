import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Menu from '../../components/Menu'
import './style.styl'

@connect(state => ({}), dispatch => bindActionCreators({}, dispatch))
class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Menu />
      </div>
    )
  }
}

export default DashboardPage
