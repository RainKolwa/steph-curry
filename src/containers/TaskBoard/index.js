import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TaskItem } from '../../components'
import slice from 'lodash/slice'
import './style.styl'

export class TaskBoard extends Component {
  render() {
    const { limit, tasks } = this.props
    const LastItems = slice(tasks, 0, limit)
    return (
      <div className="task-board">
        <header>- 学习计划 -</header>
        <TaskList items={LastItems} />
        <button>查看全部计划</button>
      </div>
    )
  }
}

TaskBoard.proptypes = {
  limit: PropTypes.number.isRequired,
}

const TaskList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) =>
        <li key={index}><TaskItem task={item} /></li>,
      )}
    </ul>
  )
}

export default connect(state => {
  const { tasks } = state.entities
  return {
    tasks,
  }
})(TaskBoard)
