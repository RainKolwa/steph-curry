import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Tick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.count || 60,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    if (this.state.count === 0) {
      this.props.onFinished()
      return
    }
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      <button className="sms">
        重新获取{this.state.count}
      </button>
    )
  }
}

Tick.propTypes = {
  count: PropTypes.number,
  onFinished: PropTypes.func.isRequired,
}
