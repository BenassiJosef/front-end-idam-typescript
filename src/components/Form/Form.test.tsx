import React from "react";
import Form from "./Form";
import Input from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { render, fireEvent } from "@testing-library/react";

const mockCallback = jest.fn((x: React.FormEvent) => {
  x.preventDefault();
});

test("button component renders without crashing", () => {
  const wrapper = render(
    <Form
      onSubmit={mockCallback}
      formContent={
        <>
          {" "}
          <Input
            label="Test"
            type="text"
            value="test"
            pattern=".{2,}"
            title="test"
            id="test"
            onChange={() => "test"}
            htmlFor="test"
            req
          />
          <Button type="submit" intent="primary" disabled={false}>
            Submit
          </Button>
        </>
      }
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("submit callback is triggered", () => {
  const { getByTestId } = render(
    <Form
      onSubmit={mockCallback}
      formContent={
        <>
          {" "}
          <Input
            label="Test"
            type="text"
            value="test"
            pattern=".{2,}"
            title="test"
            id="test"
            onChange={() => "test"}
            htmlFor="test"
            req
          />
          <Button type="submit" intent="primary" disabled={false}>
            Submit
          </Button>
        </>
      }
    />
  );
  fireEvent.submit(getByTestId("form"));
  expect(mockCallback).toHaveBeenCalledTimes(1);
});
