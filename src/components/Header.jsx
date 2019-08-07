import React from 'react'
import {string} from 'prop-types'
import { Div, Text } from 'atomize'
import constants from 'constants.js'

export default function Header({title}) {
  return (
    <Div w="100%" bg="black500" textAlign="center">
      <Text tag="h1" textColor="white" textSize="display1" m={{ b: '4rem' }}>
        {title}
      </Text>
    </Div>
  )
}

Header.propTypes = {
    title: string,
}

Header.defaultProps = {
  title: constants.appName,
}
