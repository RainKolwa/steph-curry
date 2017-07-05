import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitReservation } from '../../actions'
import { PopUp, Logo, Button, Follow, Player, Form } from '../../components'
import get from 'lodash/get'
import './style.styl'

const schema = {
  name: {
    type: 'string',
    label: '姓名',
  },
  mobile: {
    type: 'string',
    label: '电话',
  },
  age: {
    type: 'select',
    label: '年龄',
    enum: [6, 7, 8, 9, 10],
  },
  sex: {
    type: 'select',
    label: '性别',
    enum: ['男', '女'],
  },
  city: {
    type: 'select',
    label: '城市',
    enum: ['上海', '北京'],
  },
}

export class ReservePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: {
        captain: {
          name: '',
          mobile: '',
          age: 0,
          sex: 0,
          city: 0,
        },
        member1: {
          name: '',
          mobile: '',
          age: 0,
          sex: 0,
          city: 0,
        },
        member2: {
          name: '',
          mobile: '',
          age: 0,
          sex: 0,
          city: 0,
        },
      },
      showForm: false,
      showFollow: false,
      activePlayer: 'captain',
    }
  }

  handleSubmit = async () => {
    const { players } = this.state
    const res = await this.props.submitReservation(players)
    const code = get(res, 'response.code', null)
    if (code === '0') {
      this.showFollow()
    }
  }

  showForm = () => {
    this.setState({
      showForm: true,
    })
  }

  hideForm = () => {
    this.setState({
      showForm: false,
    })
  }

  showFollow = () => {
    this.setState({
      showFollow: true,
    })
  }

  activate = type => {
    this.setState({
      showForm: true,
      activePlayer: type,
    })
  }

  handleFormItemChange = e => {
    const value = e.target.value
    const name = e.target.name
    const { activePlayer } = this.state
    this.setState({
      players: {
        ...this.state.players,
        ...{
          [activePlayer]: {
            ...this.state.players[activePlayer],
            ...{
              [name]: value,
            },
          },
        },
      },
    })
  }

  render() {
    const { players, activePlayer } = this.state
    const player = players[activePlayer]
    console.log(player)
    return (
      <div className="page-reserve page-container">
        <Logo />
        <div className="reserve-form">
          <div className="players-list">
            <Player
              player={players['captain']}
              type="captain"
              OnClick={() => this.activate('captain')}
            />
            <Player
              player={players['member1']}
              type="member1"
              OnClick={() => this.activate('member1')}
            />
            <Player
              player={players['member2']}
              type="member2"
              OnClick={() => this.activate('member2')}
            />
          </div>
          <p>每个报名团体可以接受1-3人的报名</p>
          <Button text={'提交信息'} OnClick={() => this.handleSubmit()} />
        </div>
        <Form
          schema={schema}
          inVisible={this.state.showForm}
          player={player}
          type={activePlayer}
          OnClose={() => this.hideForm()}
          handleFormItemChange={this.handleFormItemChange}
        />
        <PopUp closeBtn={false} inVision={this.state.showFollow}>
          <Follow />
        </PopUp>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => bindActionCreators({ submitReservation }, dispatch)
)(ReservePage)
