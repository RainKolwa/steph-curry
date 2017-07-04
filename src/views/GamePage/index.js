import React, { Component } from 'react'
import { PopUp } from '../../components'

export default class GamePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopUp: false,
    }
  }

  show = () => {
    this.setState({
      showPopUp: true,
    })
  }

  handleHide = () => {
    this.setState({
      showPopUp: false,
    })
  }

  render() {
    return (
      <div>
        <h1 onTouchTap={() => this.show()}>未来</h1>
        <PopUp inVision={this.state.showPopUp} onHide={this.handleHide}>
          <h2>123</h2>
        </PopUp>
      </div>
    )
  }
}
