import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './style.styl'

class PopUp extends React.Component {
  render() {
    const { inVision, onHide, closeBtn } = this.props || { inVision: false }
    const containerStyle = classNames({
      'page-container': true,
      'page-popup': true,
      'page-popup-active': !!inVision,
    })
    return (
      <div className={containerStyle}>
        {this.props.children}
        {closeBtn && <span onTouchTap={() => onHide()}>x</span>}
      </div>
    )
  }
}

PopUp.propTypes = {
  closeBtn: PropTypes.bool,
  inVision: PropTypes.bool,
  onHide: PropTypes.func,
}

export default PopUp
