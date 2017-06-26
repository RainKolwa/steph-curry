import React from 'react'
import renderer from 'react-test-renderer'
import TaskItem from './index'

it('renders correctly', () => {
  const task = {
    type: '上课',
    title: '人们如何帮助社区？',
    completed: 2,
    total: 10,
  }
  const userhead = renderer.create(<TaskItem task={task} />).toJSON()
  expect(userhead).toMatchSnapshot()
})
