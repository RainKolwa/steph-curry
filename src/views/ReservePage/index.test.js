import React from 'react'
import { shallow } from 'enzyme'
import { ReservePage } from './index'

describe('<ReservePage />', () => {
  it('should render div', () => {
    const wrapper = shallow(<ReservePage />)
    expect(wrapper.find('.page-reserve')).toHaveLength(1)
  })
})
