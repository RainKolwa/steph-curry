import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../../actions'
import './style.styl'

export class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: '',
      code: '',
    }
  }

  componentDidMount() {
    this.props.loginUser()
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    })
  }
  handleRequestCode = () => {
    // verify mobile format
  }
  handleLogin = () => {}
  render() {
    const { mobile, code } = this.state
    return (
      <div className="page-login">
        <input
          type="mobile"
          value={mobile}
          onChange={e => this.handleChange(e, 'mobile')}
          placeholder="手机号"
        />
        <input
          type="mobile"
          value={code}
          onChange={e => this.handleChange(e, 'code')}
          placeholder="验证码"
        />
        <button onClick={this.handleRequestCode}>获取短信验证码</button>
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
  dispatch => bindActionCreators({ loginUser }, dispatch),
)(LoginPage)
