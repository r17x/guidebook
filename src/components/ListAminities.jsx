import React from 'react'
import { Div, Text } from 'atomize'
export default function ListAminities() {
  return (
    <Div
      shadow="4"
      h="100vh"
      border="#eee solid 1px"
      p="1rem"
      w="100%"
      tag="section"
    >
      <Text tag="h1" textAlign="right" textSize="display1">
        Property Name
      </Text>
      <Text textAlign="right">Property Address</Text>
      <Div m={{ y: '.5rem' }} w="100%" border="#eee solid 2px" />
    </Div>
  )
}
