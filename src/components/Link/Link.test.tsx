import React from "react";
import { Link } from "./Link";
import { render } from "@testing-library/react";

test("input component renders without crashing", () => {
  const wrapper = render(<Link text="Test" href="www.test.com" />);
  expect(wrapper).toBeTruthy;
});
