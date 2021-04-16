import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { render, fireEvent } from "@testing-library/react";
import useFormFields from "./useFormFields";
import { Input } from "../components/Input/Input";

test("useFormFields hooks outputs object with key + value as expected", () => {
  const { result } = renderHook(() =>
    useFormFields<TestFields>({
      test: "",
    })
  );
  const { getByTestId } = render(
    <Input
      label="Test"
      type="text"
      value={result.current.formFields.test}
      pattern=".{2,}"
      title="need a test"
      id="test"
      onChange={result.current.createChangeHandler("test")}
      htmlFor="test"
      req
    />
  );

  interface TestFields {
    test: string;
  }

  fireEvent.change(getByTestId("test-input"), {
    target: { value: "im test value fired input" },
  });
  expect(result.current.formFields.test).toBe("im test value fired input");
});
