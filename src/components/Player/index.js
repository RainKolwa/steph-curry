import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.styl'

const Player = ({ player, type, OnClick, canClose }) => {
  const playerStyle = classNames('player-bar', `player-bar-${type}`)
  const statusIcon = player && player.name ? 'btn icon-edit' : 'btn icon-add'
  const imgWidth =
    type === 'captain' ? '1.51rem' : type === 'member1' ? '1.98rem' : '2.09rem'
  return (
    <div className={playerStyle} onTouchTap={OnClick}>
      <span className="icon-man" />
      <img
        style={{ width: imgWidth, height: '.58rem' }}
        src={require(`../../assets/images/text-player-${type}.png`)}
        alt=""
      />
      {canClose
        ? <span className="btn icon-close" />
        : <span className={statusIcon} />}
    </div>
  )
}

Player.propTypes = {
  type: PropTypes.string,
  OnClick: PropTypes.func,
  player: PropTypes.object,
  canClose: PropTypes.bool,
}

export default Player
