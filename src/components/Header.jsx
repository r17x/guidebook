import React from "react";
import { string } from "prop-types";
import { Div, Text } from "atomize";
import constants from "constants.js";

export default function Header({ title, onClick }) {
  return (
    <Div w="100%" p={{ x: 1, y: 10 }} shadow="3" bg="white" textAlign="center">
      <Text
        tag="h1"
        data-testid="logo"
        onClick={onClick}
        textColor="black"
        textSize="display1"
      >
        {title}
      </Text>
    </Div>
  );
}

Header.propTypes = {
  title: string
};

Header.defaultProps = {
  title: constants.appName
};
