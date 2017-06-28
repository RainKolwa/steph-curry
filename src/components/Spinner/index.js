import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.styl'

const Spinner = ({ type }) => {
  const SpinnerStyle = classNames('spinner', `spinner-${type}`)
  return (
    <div className={SpinnerStyle}>
      loading...{type}
    </div>
  )
}

Spinner.propTypes = {
  type: PropTypes.string,
}

export default Spinner
