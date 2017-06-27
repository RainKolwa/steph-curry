import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SnackBar from '../SnackBar'
import './style.styl'

export class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props
    return (
      <div className="container-app">
        <SnackBar />
        {children}
      </div>
    )
  }
}

export default connect(state => ({}))(App)
