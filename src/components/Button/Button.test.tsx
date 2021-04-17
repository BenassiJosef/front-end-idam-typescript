import React from "react";
import { Button } from "./Button";
import { render } from "@testing-library/react";

test("button component renders without crashing", () => {
  const wrapper = render(
    <Button intent="primary" disabled={false}>
      Test me
    </Button>
  );
  expect(wrapper).toBeTruthy;
});
