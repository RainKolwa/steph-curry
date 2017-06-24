import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './style.styl'

@connect(state => ({}), dispatch => bindActionCreators({}, dispatch))
class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <h1>hello fs</h1>
        {children}
      </div>
    )
  }
}

export default App
