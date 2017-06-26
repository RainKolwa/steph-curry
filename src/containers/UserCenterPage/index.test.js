import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import UserCenterPage from './index'

const mockStore = configureStore()

describe('<UserCenterPage />', () => {
  const getState = { auth: {} }
  const store = mockStore(getState)
  it('should render div', () => {
    const wrapper = mount(<UserCenterPage store={store} />)
    expect(wrapper.find('div')).toHaveLength(1)
  })
})
