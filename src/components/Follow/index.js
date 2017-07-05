import React from 'react'
import PropTypes from 'prop-types'
import { isWechat } from '../../utils'
import BigLogo from '../../assets/images/biglogo.png'
import QrCode from '../../assets/images/qrcode.jpg'
import IconNBA from '../../assets/images/icon-nba.png'
import './style.styl'

class Follow extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  handleClick = () => {
    this.context.router.push('/reserve')
  }

  render() {
    const isWe = !isWechat()
    const msg = isWe ? '关注Jr.NBA官方微信' : '关注NBA官方微博'
    const img = isWe ? QrCode : IconNBA
    const agent = isWe ? 'wechat' : 'weibo'
    return (
      <div className="container-follow">
        <header>
          <img src={BigLogo} alt="" />
        </header>
        <div className={`poster poster-${agent}`}>
          <img src={img} alt="" />
        </div>
        <p>
          {msg}
          <br />
          实时关注库里训练日报名结果
        </p>
        <footer>第一轮抢票结果公布时间：7月10日</footer>
      </div>
    )
  }
}

export default Follow
