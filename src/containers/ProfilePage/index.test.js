import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProfilePage from './index'

const mockStore = configureStore()

describe('<ProfilePage />', () => {
  const getState = { auth: {} }
  const store = mockStore(getState)
  it('should render div', () => {
    const wrapper = mount(<ProfilePage store={store} />)
    expect(wrapper.find('.page-profile')).toHaveLength(1)
  })
})
