import React from 'react'
import { shallow } from 'enzyme'
import { ProfilePage } from './index'

describe('<ProfilePage />', () => {
  it('should render div', () => {
    const wrapper = shallow(<ProfilePage />)
    expect(wrapper.find('.page-profile')).toHaveLength(1)
  })
})
