import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()

describe('<App />', () => {
  const getState = {}
  const store = mockStore(getState)
  it('should render h1', () => {
    const wrapper = mount(<App store={store} />)
    expect(wrapper.find('h1')).toHaveLength(1)
  })
})
