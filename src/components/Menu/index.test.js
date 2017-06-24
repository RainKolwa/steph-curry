import React from 'react'
import renderer from 'react-test-renderer'
import Menu from './index'

it('renders correctly', () => {
  const menu = renderer.create(<Menu />).toJSON()
  expect(menu).toMatchSnapshot()
})
