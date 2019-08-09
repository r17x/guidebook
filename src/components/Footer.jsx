import styled from "styled-components";
import { Div, withTheme } from "atomize";

const Footer = styled(Div)`
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
`;

Footer.defaultProps = {
  tag: "footer",
  bg: "black",
  color: "white",
  textColor: "white",
  p: { x: 0, y: "1rem" },
  position: 'fixed',
};

export default withTheme(Footer);
