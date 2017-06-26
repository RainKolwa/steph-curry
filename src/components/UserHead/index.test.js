import React from 'react'
import renderer from 'react-test-renderer'
import UserHead from './index'

it('renders correctly', () => {
  const user = {
    name: 'Foo',
    avatar: 'Bar',
  }
  const userhead = renderer.create(<UserHead user={user} />).toJSON()
  expect(userhead).toMatchSnapshot()
})
