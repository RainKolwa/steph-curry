import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../components'
import title from '../../assets/images/title-about.png'
import schedule from '../../assets/images/text-schedule.png'
import './style.styl'

class About extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  handleClick = () => {
    this.context.router.push('/reserve')
  }

  render() {
    return (
      <div className="container-about">
        <header>
          <img src={title} alt="预约须知" />
        </header>
        <div className="poster">
          <img src={schedule} alt="预约开放时间" />
        </div>
        <ul>
          <li>1. 本次活动欢迎6-18岁的青少年与父母共同参与。</li>
          <li>
            2. 本次抢票活动采用实名制预约方式，主报名人需填写手机号作为 预约ID，每个预约ID可进行1人的个人预约或不超过3人的团体（
            家庭）预约。
          </li>
          <li>
            3. 预约时请务必填写真实姓名和年龄信息。抢票成功后需填写身份 证信息，后台将进行信息核实。如信息不符，则将被取消领票资
            格。（注：年龄=2017-出生年份，与月份无关）
          </li>
          <li>4. 每一轮预约结束后，后台将根据预约ID抽取获得门票的幸运者。 结果公布后，主报名人需使用报名时填写的手机号进行查询。</li>
          <li>5. 抢票成功并正确填写相关身份信息后，您将得到取票的时间地点 信息。后台将根据您预约时填写的城市信息合理分配取票时间。</li>
          <li>6. 第一轮抢票成功的预约ID和报名人员将不能再参与第二轮预约， 未成功的可以继续参加第二轮预约。</li>
          <li>
            7. 领票时需主报名人携带每一位相应的身份证件（身份证、护照或 户口本）根据指定时间和地点取票。如发现冒领、造假或信息不
            符等情况，或未在指定时间内领票，您将被取消领票资格。
          </li>
        </ul>
        <Button text={'了解'} OnClick={() => this.handleClick()} />
      </div>
    )
  }
}

export default About
