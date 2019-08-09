import React from "react";
import { Div, Container } from "atomize";

export default function AppDrawer({ children }) {
  return (
    <Container minH="100vh">
      <Div>{children}</Div>
    </Container>
  );
}
