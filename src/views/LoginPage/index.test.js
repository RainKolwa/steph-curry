import React from 'react'
import { shallow } from 'enzyme'
import { ResultPage } from './index'

describe('<ResultPage />', () => {
  it('should render div', () => {
    const wrapper = shallow(<ResultPage />)
    expect(wrapper.find('.page-result')).toHaveLength(1)
  })
})
