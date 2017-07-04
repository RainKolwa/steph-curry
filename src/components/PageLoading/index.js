import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './style.styl'

class PageLoading extends React.Component {
  render() {
    const { inVision, total, loaded } = this.props || { inVision: false }
    const containerStyle = classNames({
      'page-container': true,
      'page-loading': true,
      'page-loading-hide': !inVision,
    })
    const percent = Math.floor(loaded / total * 100) + '%'
    return (
      <div className={containerStyle}>
        loading... {percent}...
      </div>
    )
  }
}

PageLoading.propTypes = {
  inVision: PropTypes.bool,
}

export default PageLoading
