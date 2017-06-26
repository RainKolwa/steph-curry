import React from 'react'
import { shallow } from 'enzyme'
import { TaskBoard } from './index'

describe('<TaskBoard />', () => {
  it('should render div', () => {
    const wrapper = shallow(<TaskBoard />)
    expect(wrapper.find('.task-board')).toHaveLength(1)
  })
})
