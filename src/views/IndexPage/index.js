import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadParticipants } from '../../actions'
import { Logo, Button, PopUp, About } from '../../components'
import get from 'lodash/get'
import './style.styl'

class IndexPage extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      showPopUp: false,
      count: 0,
    }
  }

  componentDidMount() {
    this.load()
  }

  load = async () => {
    const res = await this.props.loadParticipants()
    const count = get(res, 'response.data', 0)
    this.setState({
      count: count,
    })
  }

  show = () => {
    this.setState({
      showPopUp: true,
    })
  }

  handleHide = () => {
    this.setState({
      showPopUp: false,
    })
  }

  handleClick = () => {
    this.show()
  }

  render() {
    const { count } = this.state
    const numbers = count.toString().split('')
    return (
      <div className="page-home page-container">
        <Logo />
        <Title />
        <SubTitle />
        <ul className="info">
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
          <Button text={'前往预约'} OnClick={() => this.handleClick()} />
          <div className="total">
            目前已
            {numbers.map((number, index) =>
              <span key={index}>
                {number}
              </span>
            )}人报名
          </div>
        </div>
        <PopUp
          closeBtn={false}
          inVision={this.state.showPopUp}
          onHide={this.handleHide}
        >
          <About />
        </PopUp>
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
  dispatch => bindActionCreators({ loadParticipants }, dispatch)
)(IndexPage)
