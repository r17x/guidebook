import React from 'react'
import constants from 'constants.js'
import { useGlobalState } from '@evilfactory/global-state'
import { Div, Row, Col, Button, Text } from 'atomize'
import {
  SideDrawer,
  ListProperty,
  FormProperty,
  Header,
  Footer,
  Container
} from 'components'

import { newProperty, openDrawer, closeDrawer } from 'actions.js'

export default function App() {
  const [{ property: data, drawer }, handleDrawer] = useGlobalState(openDrawer)
  const [, handleClose] = useGlobalState(closeDrawer)
  const [, onSubmit] = useGlobalState(newProperty)
  return (
    <Div tag="section" h="100vh">
      <Header />
      <SideDrawer {...drawer} />
      <Container>
        <Row w="100%" m={{ b: '1rem' }}>
          <Col overflow="scroll" h="100vh" size={{ md: 4, s: 12 }} p="0">
            <Button
              rounded="sm"
              onClick={() => {
                handleDrawer({
                  right: 'unset',
                  left: 0,
                  onClose: handleClose,
                  isOpen: true,
                  children: FormProperty,
                  props: { onSubmit }
                })
              }}
              w="100%"
              m={{ b: '1rem' }}
              data-testid="addNewProperty"
            >
              Add New Property
            </Button>
            <ListProperty data={data} />
          </Col>
          <Col size={{ md: 8, s: 12 }}>
            <Div
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
          </Col>
        </Row>
      </Container>
      <Footer>© {constants.appName} </Footer>
    </Div>
  )
}
