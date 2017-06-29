import React from 'react'
import PropTypes from 'prop-types'
import './style.styl'

export class UserHead extends React.Component {
  handleUserSelect = () => {
    this.context.router.push('/my')
  }

  render() {
    const { name, avatar } = this.props.user
    return (
      <div className="user-head">
        <img
          src={avatar}
          alt={name}
          onTouchTap={() => this.handleUserSelect()}
        />
        <span>
          {name}
        </span>
      </div>
    )
  }
}

UserHead.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
}

UserHead.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default UserHead
