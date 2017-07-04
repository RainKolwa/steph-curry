import React, { Component } from 'react'
import { TimelineMax } from 'gsap'

export default class GamePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    const el = document.getElementById('test')
    this.g = new TimelineMax({
      paused: true,
      repeat: -1,
      repeatDelay: -1,
      yoyo: true,
    })
    this.g
      .to(el, 0.1, {
        width: '200px',
        height: '150px',
        ease: 'linear',
      })
      .to(el, 0.1, {
        width: '200px',
        height: '120px',
        ease: 'linear',
      })
  }

  play() {
    this.g.play()
  }

  count() {
    this.setState({
      count: this.state.count++,
    })
    console.log(this.state.count)
  }

  render() {
    return (
      <div
        id="test"
        style={{ background: 'green', width: '100px', height: '100px' }}
        onClick={() => this.play()}
      />
    )
  }
}
