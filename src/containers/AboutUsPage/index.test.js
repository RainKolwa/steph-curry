import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import AboutUsPage from './index'

const mockStore = configureStore()

describe('<AboutUsPage />', () => {
  const getState = { auth: {} }
  const store = mockStore(getState)
  it('should render div', () => {
    const wrapper = mount(<AboutUsPage store={store} />)
    expect(wrapper.find('.about-us')).toHaveLength(1)
  })
})
