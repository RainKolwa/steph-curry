import React, { Component } from 'react'
import './style.styl'

export class AboutUsPage extends Component {

  render () {
    return (
      <div className="about-us">
        <div className="logo"></div>
        <div className="content">
          <h5>蓝橡树未来学校</h5>
          <p>哈佛专家创立，面向中国家庭的国际教育规划平台。不让孩子的天赋被应试教育局限，给他们更好的未来。</p>
          <p><span>蓝</span> —— 象征理智、纯净，也含有科技和蓝海之意；</p>
          <p><span>橡</span> —— 寓意孩子长大成人，充满高尚、独立的人格理想，如橡树一样坚韧、勇敢；</p>
          <p><span>树</span> —— 则蕴含着我们“十年树木，百年树人”的教育理念</p>
        </div>
        <div className="copy-right">
          <p>Shanghai Lanxin Information Technology Co., Ltd</p>
          <p>蓝歆科技 版权所有</p>
        </div>
      </div>
    )
  }
}


export default (AboutUsPage)
