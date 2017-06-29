import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from './index'

describe('<LoginPage />', () => {
  it('should render div', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper.find('.page-login')).toHaveLength(1)
  })
})
