import React from "react";
import { Header } from "./Header";
import { render } from "@testing-library/react";

test("header component renders without crashing", () => {
  const wrapper = render(<Header title="Test" />);
  expect(wrapper).toBeTruthy;
});
