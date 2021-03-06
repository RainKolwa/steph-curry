import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitAdditional } from '../../actions'
import { PopUp, Logo, Button, Form, Pandora } from '../../components'
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
  backup_mobile: {
    type: 'string',
    label: '备用电话',
  },
  certificate: {
    type: 'string',
    label: '身份证/护照',
  },
}

export class ResultPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: {
        captain: {
          name: '',
          mobile: '',
          backup_mobile: '',
          certificate: '',
        },
        member1: {
          name: '',
          mobile: '',
          backup_mobile: '',
          certificate: '',
        },
        member2: {
          name: '',
          mobile: '',
          backup_mobile: '',
          certificate: '',
        },
      },
      showForm: false,
      showSubmitSuccess: false,
      activePlayer: 'captain',
    }
  }

  handleSubmit = () => {
    console.log('submiting')
    console.log(this.state.players)
    this.showSubmitSuccess()
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

  showSubmitSuccess = () => {
    this.setState({
      showSubmitSuccess: true,
    })
  }

  hideSubmitSuccess = () => {
    this.setState({
      showSubmitSuccess: false,
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
    return (
      <div className="page-result page-container">
        <Logo />
        <div className="result-form">
          <header>
            <img
              src={require('../../assets/images/text-congrat.png')}
              alt="恭喜您获得活动门票"
            />
          </header>
          <p>请填写如下信息</p>
          <div className="players-list">
            <AdditionalPlayer
              type="captain"
              player={this.state.players['captain']}
              OnClick={() => this.activate('captain')}
            />
            <AdditionalPlayer
              type="member1"
              player={this.state.players['member1']}
              OnClick={() => this.activate('member1')}
            />
            <AdditionalPlayer
              type="member2"
              player={this.state.players['member2']}
              OnClick={() => this.activate('member2')}
            />
          </div>
          <Button text={'确认提交'} OnClick={() => this.handleSubmit()} />
        </div>
        <Form
          className="form-result-pop"
          schema={schema}
          inVisible={this.state.showForm}
          player={player}
          type={activePlayer}
          OnClose={() => this.hideForm()}
          handleFormItemChange={this.handleFormItemChange}
        />
        <PopUp
          closeBtn
          inVision={this.state.showSubmitSuccess}
          onHide={this.hideSubmitSuccess}
        >
          <Pandora type="failure" />
        </PopUp>
      </div>
    )
  }
}

const AdditionalPlayer = ({ player, type, OnClick }) => {
  const playerStyle = classNames(
    'additional-player-bar',
    `additional-player-bar-${type}`
  )
  return (
    <div className={playerStyle} onTouchTap={() => OnClick()}>
      <ul>
        {Object.keys(schema).map((key, index) => {
          const item = schema[key]
          return (
            <li key={index}>
              {item.label}：{player[key]}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default connect(
  state => ({}),
  dispatch => bindActionCreators({ submitAdditional }, dispatch)
)(ResultPage)
