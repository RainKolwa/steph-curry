import React, { Component } from 'react'
import { Logo, Button } from '../../components'
import './style.styl'

class IndexPage extends Component {
  handleClick = () => {
    console.log('show detail')
  }

  render() {
    return (
      <div className="page-home page-container">
        <Logo />
        <Title />
        <SubTitle />
        <ul>
          <li>
            <span className="icon-basketball" />
            2017 Jr. NBA夏令营-库里训练日
          </li>
          <li>
            <span className="icon-calendar" />
            2017年7月22日（星期六）14:00
          </li>
          <li>
            <span className="icon-location" />
            北京工业大学体育馆（北京市朝阳区平乐园100号北工大院内）
          </li>
          <li>
            <span className="icon-warning" />
            本次活动一人一票,凭票入场
          </li>
        </ul>
        <div className="entry">
          <Button text={'前往预约'} OnClick={() => this.handleClick()}>
            前往预约
          </Button>
          <div className="total">
            目前已<span>1</span>
            <span>1</span>
            <span>1</span>人报名
          </div>
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

export default IndexPage
