import React from 'react'
import PropTypes from 'prop-types'
import './style.styl'

const TaskItem = ({ task }) => {
  const { type, title, completed, total } = task
  return (
    <div className="task-item">
      <span>{type}：</span>
      <span>{title}</span>
      <div>
        {completed}/{total}
      </div>
    </div>
  )
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    type: PropTypes.oneOf(['预习', '作业', '上课']),
    title: PropTypes.string.isRequired,
    completed: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
}

export default TaskItem
