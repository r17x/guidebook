import React from "react";
import Header from "components/Header";
import constants from "constants.js";

test("should render header correctly", () => {
  const { container, getByText } = render(<Header />);
  const title = getByText(constants.appName);
  expect(title).toBeVisible();
  expect(container).toMatchSnapshot();
});

test("Should have on click", () => {
  const handleClick = jest.fn();
  const { container, getByTestId } = render(<Header onClick={handleClick} />);

  expect(getByTestId("logo")).toHaveTextContent(constants.appName);
  fireEvent.click(getByTestId("logo"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
