import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import './style.styl'
import { isMobile } from '../../utils'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin({
  shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
    return isMobile();
  }
}, 1)

const gradeOptions = ["学前","托班","幼儿园小班","幼儿园中班","幼儿园大班","一年级","二年级","三年级","四年级","五年级","六年级","七年级","八年级","九年级","十年级","十一年级","十二年级"]


export class ProfilePage extends Component {

  renderOptionItem = (value, index) => {
    return (
      <option key={index} value={value}>{value}</option>
    )
  }

  render() {
    const { avatar, name, enname, birth, school, grade, email, address } = this.props
    let { province, city, area, mobile, consignee, detail } = address || {}
    const addressStr = address && province+city+area+detail
    const renderOptionItem = this.renderOptionItem
    const handleProfileChange = this.handleProfileChange
    const selectClass = classnames({
      'selection': true,
      'selection-active': !!grade
    })
    const dateClass = classnames({
      'date-input': true,
      'date-input-active': birth !== '2000-01-01'
    })

    return (
      <div className="page-profile">
        <ul>
          <li className="avatar">
            <span>头像</span>
            <img src={avatar} alt=""/>
          </li>
          <li>
            <span>孩子姓名</span>
            <input type="text" ref={name =>{this.name=name}} value={name || ''} onChange={e=> handleProfileChange({'name': e.target.value})} placeholder="请填写"/>
          </li>
          <li>
            <span>孩子英文名</span>
            <input type="text" ref={name =>{this.enname=enname}} value={enname || ''} onChange={e=> handleProfileChange({'enname': e.target.value})} placeholder="请填写"/>
          </li>
          <li>
            <span>出生日期</span>
            <input className={dateClass} type="date" ref={birth =>{this.birth=birth}} value={!!birth ? birth : '2000-01-01'} onChange={e=> handleProfileChange({'birth': e.target.value})} />
            <i className="icon-arrow"></i>
          </li>
        </ul>
        <ul>
          <li>
            <span>所在学校</span>
            <input type="text" ref={school =>{this.school=school}} value={school || ''} onChange={e=> handleProfileChange({"school": e.target.value})} placeholder="填写孩子正在就读的学校"/>
            <i className="icon-arrow"></i>
          </li>
          <li>
            <span>在读年级</span>
            <select className={selectClass} dir="rtl" value={ grade } onChange={e=> handleProfileChange({'grade': e.target.value})}>
              <option value="" disabled className="default-option">请选择孩子所在年级</option>
              {gradeOptions.map((value, index) => renderOptionItem(value, index))}
            </select>
            <i className="icon-arrow"></i>
          </li>
        </ul>
        <ul>
          <li>
            <span>邮箱（选填）</span>
            <input type="text" ref={email =>{this.email=email}} value={email || ''} onChange={e=> handleProfileChange({'email': e.target.value})} placeholder="请填写您的邮箱"/>
          </li>
          {!address &&
            <li className="address-empty" onTouchTap={()=>this.handleEditAddress()}>
              <span>收件地址</span>
              <label htmlFor="">请选择您的地址</label>
              <i className="icon-arrow"></i>
            </li>
          }
          {address &&
            <li className="address-completed" onTouchTap={()=>this.handleEditAddress()}>
              <div>
                <p>
                  收件地址<br />
                  {consignee}&nbsp;&nbsp;{mobile}<br />
                  {addressStr}
                </p>
              </div>
              <i className="icon-arrow"></i>
            </li>
          }
        </ul>
        <button className="button-radius" onTouchTap={()=>this.handleSubmit()}><span>保存</span></button>
      </div>
    )
  }
}

export default connect(state => {
  const { user } = state.auth
  const { profile } = user || {}
  const { avatar, name, enname, birth, school, grade, email, address } = profile || {}
  return {
    name,
    enname,
    birth,
    school,
    grade,
    email,
    address,
    avatar
  }
})(ProfilePage)
