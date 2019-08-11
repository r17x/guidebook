import React from 'react'
import constants from 'constants.js'
import { useGlobalState } from '@evilfactory/global-state'
import { Div, Row, Col, Button, Icon, scrollTo } from 'atomize'
import {
  SideDrawer,
  ListProperty,
  ListAminities,
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
          <Col size={{ md: 4, s: 12 }} p="0">
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
              <Icon m={{ r: '3px' }} name="Store" size="20px" color="white" />
              Add New Property
            </Button>
            <Div tag="section" overflow="scroll" h="100vh">
              <ListProperty data={data} onClick={() => scrollTo('#guide')} />
            </Div>
          </Col>
          <Col id="guide" size={{ md: 8, s: 12 }}>
            <ListAminities />
          </Col>
        </Row>
      </Container>
      <Footer>© {constants.appName} </Footer>
    </Div>
  )
}
