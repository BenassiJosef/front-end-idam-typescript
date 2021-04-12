import React, { FormEvent } from "react";
import styled from "styled-components";

const StlyedForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
`;

type WithChildren<T = Record<string, unknown>> = T & {
  formContent: React.ReactNode;
};

type FormProps = WithChildren<{
  onSubmit: (e: FormEvent<Element>) => void;
}>;

const Form = ({ onSubmit, formContent }: FormProps): JSX.Element => {
  return (
    <StlyedForm data-testid="form" onSubmit={onSubmit}>
      {formContent}
    </StlyedForm>
  );
};
export default Form;
