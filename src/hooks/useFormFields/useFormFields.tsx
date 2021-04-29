import React from "react";

type UseFormFieldsHooks<T> = {
  formFields: T;
  createChangeHandler: (
    key: keyof T
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function useFormFields<T>(initialValues: T): UseFormFieldsHooks<T> {
  const [formFields, setFormFields] = React.useState<T>(initialValues);
  const createChangeHandler = (key: keyof T) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormFields((prev: T) => ({ ...prev, [key]: e.target.value }));
  };
  return { formFields, createChangeHandler };
}

export default useFormFields;
