import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser, getSmsCode, addStackMessage } from '../../actions'
import { isMobile, setItem } from '../../utils'
import get from 'lodash/get'
import './style.styl'

export class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: '',
      code: '',
    }
  }

  componentDidMount() {}

  handleChange = (e, name) => {
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
    }
  }

  handleLogin = async () => {
    const { mobile, code } = this.state
    // verify code & mobile
    if (!isMobile(mobile)) return
    if (!code) return
    const data = {
      mobile,
      code,
    }
    const res = await this.props.loginUser(data)
    if (res.type === 'LOGIN_IN_SUCCESS') {
      const user = get(res, 'response.data')
      const token = user.token
      setItem('token', token)
      setItem('user', JSON.stringify(user))
      this.props.addStackMessage({ type: 'success', content: '登录成功' })
    }
  }

  render() {
    const { mobile, code } = this.state
    return (
      <div className="page-login">
        <input
          type="number"
          value={mobile}
          onChange={e => this.handleChange(e, 'mobile')}
          placeholder="手机号"
        />
        <br />
        <div>
          <input
            type="text"
            value={code}
            onChange={e => this.handleChange(e, 'code')}
            placeholder="验证码"
          />
          <button onClick={this.handleRequestCode}>获取短信验证码</button>
        </div>
        <br />
        <button onClick={this.handleLogin}>登录</button>
      </div>
    )
  }
}

export default connect(
  state => {
    const { user } = state.auth
    return {
      user,
    }
  },
  dispatch =>
    bindActionCreators({ loginUser, getSmsCode, addStackMessage }, dispatch),
)(LoginPage)
