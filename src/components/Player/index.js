import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.styl'

const Player = ({ type, OnClick }) => {
  const playerStyle = classNames('player-bar', `player-bar-${type}`)
  const statusIcon = status === 'create' ? 'icon-add' : 'icon-close'
  const imgWidth =
    type === 'captain' ? '1.51rem' : type === 'member1' ? '1.98rem' : '2.09rem'
  return (
    <div className={playerStyle}>
      <span className="icon-man" />
      <img
        style={{ width: imgWidth, height: '.58rem' }}
        src={require(`../../assets/images/text-player-${type}.png`)}
        alt=""
      />
      <span className={statusIcon} onTouchTap={OnClick} />
    </div>
  )
}

Player.propTypes = {
  type: PropTypes.string,
  OnClick: PropTypes.func,
}

export default Player
