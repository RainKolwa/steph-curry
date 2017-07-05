import React, { Component } from 'react'
import configs from '../../configs'
import './style.styl'

class PreloadImages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div className="preload-images" id="preload">
        <ul>
          {configs.preloads.map((img, index) => {
            return (
              <li key={index}>
                <img src={require(`../../assets/images/${img}`)} alt="" />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PreloadImages
