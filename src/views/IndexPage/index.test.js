import React from 'react'
import { shallow } from 'enzyme'
import IndexPage from './index'

describe('<IndexPage />', () => {
  it('should render div', () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find('.page-home')).toHaveLength(1)
  })
})
