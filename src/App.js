import React from "react";
import AppDrawer from "./AppDrawer.js";
import { StateProvider, useGlobalState } from "@evilfactory/global-state";
import { ListProperty, FormProperty, Header, Footer } from "components";
import { Div, Row, Col } from "atomize";

import AppReducer from "reducer.js";
import { newProperty } from "actions.js";

const initialState = {
  property: [],
  drawer: { isOpen: false, children: null, onClose: () => {} }
};

const AppChild = () => {
  const [{ property: data }, createNewProperty] = useGlobalState(newProperty);
  return (
    <Div tag="section" h="100vh">
      <Header />
      <AppDrawer>
        <Row>
          {[].map((Cmp, key) => (
            <Col size={{ md: 6, s: 12 }}>{Cmp}</Col>
          ))}
        </Row>
        <FormProperty data-testid="formProperty" onSubmit={createNewProperty} />
        <ListProperty data={data} />
      </AppDrawer>
      <Footer>This is Footer.</Footer>
    </Div>
  );
};

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={AppReducer}>
      <AppChild />
    </StateProvider>
  );
}
