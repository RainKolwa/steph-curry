import React from 'react'
import { shallow } from 'enzyme'
import { AboutUsPage } from './index'

describe('<AboutUsPage />', () => {
  it('should render div', () => {
    const wrapper = shallow(<AboutUsPage />)
    expect(wrapper.find('.about-us')).toHaveLength(1)
  })
})
