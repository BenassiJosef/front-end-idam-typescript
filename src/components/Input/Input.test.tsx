import React from "react";
import { Input } from "./Input";
import { render } from "@testing-library/react";

test("input component renders without crashing", () => {
  const wrapper = render(
    <Input
      label="Test"
      type="text"
      value="test"
      pattern=".{2,}"
      title="need a test"
      id="name"
      onChange={() => "test"}
      htmlFor="test"
      req
    />
  );
  expect(wrapper).toMatchSnapshot();
});
