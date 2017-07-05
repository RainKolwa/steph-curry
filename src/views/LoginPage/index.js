import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LoadResult, getSmsCode, addStackMessage } from '../../actions'
import { Tick, Logo, Button } from '../../components'
import { isMobile } from '../../utils'
import './style.styl'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: '',
      code: '',
      showTick: false,
    }
  }

  handleChange = e => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value,
    })
  }

  handleRequestCode = async () => {
    const { mobile } = this.state
    // verify mobile
    if (!isMobile(mobile)) return
    const data = {
      type: 'signIn',
      mobile: mobile,
    }
    const res = await this.props.getSmsCode(data)
    if (res.type === 'SMS_CODE_SUCCESS') {
      this.props.addStackMessage({ type: 'success', content: '短信验证码发送成功' })
      this.startTick()
    }
  }

  handleLogin = async () => {
    this.props.router.replace('/game')

    const { mobile, code } = this.state
    // verify code & mobile
    if (!isMobile(mobile)) return
    if (!code) return
    const data = {
      mobile,
      code,
    }
    const res = await this.props.LoadResult(data)
    if (res.type === 'LOGIN_IN_SUCCESS') {
      // const user = get(res, 'response.data')
      // const token = user.token
      // setItem('token', token)
      // setItem('user', JSON.stringify(user))
      this.props.addStackMessage({ type: 'success', content: '登录成功' })
      // this.props.router.replace('/')
    }
  }

  startTick() {
    this.setState({
      showTick: true,
    })
  }

  endTick() {
    this.setState({
      showTick: false,
    })
  }

  render() {
    const { mobile, code, showTick } = this.state
    return (
      <div className="page-login page-container">
        <Logo />
        <Title />
        <SubTitle />
        <div className="login-container">
          <p>输入团队主报名人手机号，进行查询</p>
          <div className="login-item">
            <label htmlFor="mobile">手机号</label>
            <input
              type="number"
              name="mobile"
              value={mobile}
              onChange={this.handleChange}
            />
          </div>
          <div className="login-item">
            <label htmlFor="code">验证码</label>
            <input
              type="text"
              name="code"
              value={code}
              onChange={this.handleChange}
            />
            {showTick
              ? <Tick count={10} onFinished={() => this.endTick()} />
              : <div
                  className="button-code"
                  onTouchTap={() => this.handleRequestCode()}
                >
                  获取验证码
                </div>}
          </div>
          <Button text={'确认查询'} OnClick={() => this.handleLogin()} />
        </div>
      </div>
    )
  }
}

const Title = () => {
  return <div className="title" />
}

const SubTitle = () => {
  return <div className="subtitle" />
}

export default connect(
  state => ({}),
  dispatch =>
    bindActionCreators({ LoadResult, getSmsCode, addStackMessage }, dispatch)
)(LoginPage)
