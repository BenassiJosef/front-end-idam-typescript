import React from "react";
import Success from "./Success";
import { render } from "@testing-library/react";

test("success component render without crashing", () => {
  const wrapper = render(<Success />);
  expect(wrapper).toBeTruthy;
});
