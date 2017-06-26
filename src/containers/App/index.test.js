import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import App from './index'

const mockStore = configureStore()

describe('<App />', () => {
  const getState = {}
  const store = mockStore(getState)
  it('should render div', () => {
    const wrapper = mount(<App store={store} />)
    expect(wrapper.find('div')).toHaveLength(1)
  })
})
