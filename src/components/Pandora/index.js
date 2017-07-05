import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Logo } from '../../components'
import './style.styl'

class Pandora extends React.Component {
  render() {
    const { type } = this.props
    return (
      <div className="container-ticket">
        <Logo />
        <Flag type={type} />
        <Msg type={type} />
        {type === 'success' &&
          <div className="desc">
            <ul>
              <li>取票序号:</li>
              <li>取票地点:</li>
              <li>取票时间:</li>
            </ul>
            <p>
              取票条件:请携带并出示已填写的每一位报名人对应的身份证件（身份证、护照或户口本），根据指定时间和地点取票。如发现冒领、造假或信息不符等情况，或未在指定时间内领票，您将被取消领票资格。
            </p>
          </div>}
        {type === 'failure' &&
          <div className="desc">
            <ul className="desc-fail">
              <li>
                第二轮预约<br />时间b7月13日－7月16日<br />
              </li>
              <li>
                第二轮抢票结果公布时间<br />
                7月17日<br />
              </li>

              <li>您可以再尝试</li>
            </ul>
          </div>}
      </div>
    )
  }
}

const Flag = ({ type }) => {
  const style = classNames('flag', `flag-${type}`)
  return <div className={style} />
}

const Msg = ({ type }) => {
  const style = classNames('msg', `msg-${type}`)
  return <div className={style} />
}

Flag.propTypes = {
  type: PropTypes.string.isRequired,
}

Msg.propTypes = {
  type: PropTypes.string.isRequired,
}

Pandora.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Pandora
