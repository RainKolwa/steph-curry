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
        <dl>
          <dt>活动时间</dt>
          <dd>2017年7月22日（星期六）14:00</dd>
          <dt>活动地点</dt>
          <dd>
            北京工业大学体育馆<br />（北京市朝阳区平乐园100号北工大院内）
          </dd>
        </dl>
        <div className="entry">
          <Button text={'前往预约'} OnClick={() => this.handleClick()}>
            前往预约
          </Button>
          <p>想见库里吗？点击预约，马上抢票吧</p>
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
