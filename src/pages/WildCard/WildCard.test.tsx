import React from "react";
import WildCard from "./WildCard";
import { render } from "@testing-library/react";

test("wild card component render without crashing", () => {
  const wrapper = render(<WildCard />);
  expect(wrapper).toBeTruthy;
});
