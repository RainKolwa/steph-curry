import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import DashboardPage from './index'

const mockStore = configureStore()

describe('<DashboardPage />', () => {
  const getState = {}
  const store = mockStore(getState)
  it('renders correctly', () => {
    const dashboard = renderer.create(<DashboardPage store={store} />).toJSON()
    expect(dashboard).toMatchSnapshot()
  })
})
