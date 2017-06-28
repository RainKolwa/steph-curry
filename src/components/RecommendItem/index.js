import React from 'react'
import PropTypes from 'prop-types'
import './style.styl'

const RecommendItem = ({ post }) => {
  const { content } = post
  return (
    <div>
      {content}
    </div>
  )
}

RecommendItem.propTypes = {
  post: PropTypes.object,
}

export default RecommendItem
