import React from 'react'
import PropTypes from 'prop-types'
import './style.styl'

const UserHead = ({ user }) => {
  const { name, avatar } = user
  return (
    <div className="user-head">
      <img src={avatar} alt={name} />
      <span>{name}</span>
    </div>
  )
}

UserHead.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
}

export default UserHead
