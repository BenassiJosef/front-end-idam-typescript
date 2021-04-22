import React from "react";
import Verify from "./Verify";
import { render } from "@testing-library/react";

test("verifycomponent render without crashing", () => {
  const wrapper = render(<Verify />);
  expect(wrapper).toBeTruthy;
});
