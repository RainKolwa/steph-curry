import React from 'react'
import { shallow } from 'enzyme'
import { App } from './index'

describe('<App />', () => {
  it('should render div', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.container-app')).toHaveLength(1)
  })
})
