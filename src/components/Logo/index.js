import React from 'react'
import PropTypes from 'prop-types'
import logoImg from '../../assets/images/logo.png'
import './style.styl'

const Logo = ({ styles }) => {
  return (
    <div className="logo" style={styles}>
      <img src={logoImg} alt="JR.NBA" />
    </div>
  )
}

Logo.propTypes = {
  styles: PropTypes.object,
}

export default Logo
