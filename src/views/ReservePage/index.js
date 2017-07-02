import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitReservation } from '../../actions'
import './style.styl'

export class ReservePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
    }
  }

  handleReserve = () => {
    console.log('submiting')
  }

  render() {
    const { players } = this.state
    return (
      <div className="page-reserve">
        <p>
          reserve page {players.join(',')}
        </p>
        <button onTouchTap={() => this.handleReserve()}>提交</button>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => bindActionCreators({ submitReservation }, dispatch)
)(ReservePage)
