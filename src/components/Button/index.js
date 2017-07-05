import React from 'react'
import PropTypes from 'prop-types'
import './style.styl'

const mapTextToImage = text => {
  switch (text) {
    case '了解':
      return 'btn-txt-about'
      // eslint-disable-next-line
      break
    case '确认提交':
      return 'btn-txt-confirm-submit'
      // eslint-disable-next-line
      break
    case '确认查询':
      return 'btn-txt-confirm'
      // eslint-disable-next-line
      break
    case '前往预约':
      return 'btn-txt-go'
      // eslint-disable-next-line
      break
    case '提交信息':
      return 'btn-txt-submit'
      // eslint-disable-next-line
      break
    default:
      return 'btn-txt-submit'
      // eslint-disable-next-line
      break
  }
}

const Button = ({ text, OnClick, styles }) => {
  const imagePath = mapTextToImage(text)
  return (
    <div className="button" onTouchTap={() => OnClick()} style={styles}>
      <img src={require(`../../assets/images/${imagePath}.png`)} alt={text} />
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  OnClick: PropTypes.func.isRequired,
  styles: PropTypes.object,
}

export default Button
