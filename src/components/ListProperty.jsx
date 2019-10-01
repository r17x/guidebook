import React from 'react'
import { array } from 'prop-types'
import { Col, Row, Div, Text, Label } from 'atomize'

export default function ListProperty({ data, onClick }) {
  const renderItem = (item, index) => (
    <Col
      cursor="pointer"
      size={12}
      key={index}
      onClick={onClick.bind(ListProperty, item)}
      d="flex"
      flexDir={{ md: 'column', s: 'row' }}
      style={{ padding: 0, margin: '0 0 1rem 0' }}
    >
      <Div
        h="25vh"
        bg="black400"
        textColor="white"
        color="white"
        bgSize="cover"
        bgPos="center"
        w="100%"
        rounded="sm"
        m={{ b: '.5rem' }}
        d="flex"
        p={'1rem'}
        flexDir="column"
        justify="flex-end"
      >
        <Text textSize="title" tag="h1">
          {item.name}
        </Text>
        <Label>{item.address}</Label>
      </Div>
    </Col>
  )
  return (
    <Row m="0" w="100%" data-testid="listProperty">
      {data.map(renderItem)}
    </Row>
  )
}

ListProperty.defaultProps = {
  onClick: () => {}
}

ListProperty.propTypes = {
  data: array.isRequired
}
