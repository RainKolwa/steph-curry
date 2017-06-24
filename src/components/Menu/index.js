import React from 'react'
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

const Menu = () => {
  return (
    <ul className="menu-main">
      {MENU_CONFIG.map(({ name, path }, index) => {
        return (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
