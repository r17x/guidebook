import React from 'react'
import Header from 'components/Header'
import constants from 'constants.js'

test('should render header correctly', () => {
  const { container, getByText } = render(<Header />)
  const title = getByText(constants.appName)
  expect(title).toBeVisible()
  expect(container).toMatchSnapshot()
})
