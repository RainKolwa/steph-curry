import React from 'react'
import { shallow } from 'enzyme'
import { DashboardPage } from './index'

describe('<DashboardPage />', () => {
  it('should render div', () => {
    const wrapper = shallow(<DashboardPage />)
    expect(wrapper.find('.page-dashboard')).toHaveLength(1)
  })
})
