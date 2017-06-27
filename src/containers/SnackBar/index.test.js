import React from 'react'
import { shallow } from 'enzyme'
import { SnackBar } from './index'

describe('<SnackBar />', () => {
  it('should render div', () => {
    const wrapper = shallow(<SnackBar snackMessages={[]} />)
    expect(wrapper.find('.snack-bar')).toHaveLength(1)
  })
})
