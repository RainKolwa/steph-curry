import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './style.styl'

const MENU_CONFIG = [
  {
    name: '学习',
    path: '/',
  },
  {
    name: '课程',
    path: '/course',
  },
  {
    name: '作业',
    path: '/homework',
  },
]

const Menu = ({ items = MENU_CONFIG, type = 'main' }) => {
  const containerClass = `menu-${type}`
  return (
    <ul className={containerClass}>
      {items.map(({ name, path }, index) => {
        return (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
  type: PropTypes.string,
}

export default Menu
