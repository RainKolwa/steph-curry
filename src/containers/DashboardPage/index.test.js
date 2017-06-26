import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import DashboardPage from './index'

const mockStore = configureStore()

describe('<DashboardPage />', () => {
  const getState = { auth: {} }
  const store = mockStore(getState)
  it('should render div', () => {
    const wrapper = mount(<DashboardPage store={store} />)
    expect(wrapper.find('div')).toHaveLength(1)
  })
})
