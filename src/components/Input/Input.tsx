import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOUR } from "../../constants";

const StyledInput = styled.input`
  height: 36px;
  font-size: 16px;
  border: solid 1px #979797;
  background-color: #ffffff;
  border-radius: 2px;
  margin-top: 8px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${PRIMARY_COLOUR};
  }
  width: 100%;
`;

const StyledLabel = styled.label``;

const StyledWrapper = styled.div`
  padding-bottom: 16px;
`;

export type InputProps = {
  label: string;
  pattern?: string;
  title?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  id: string;
  htmlFor: string;
  req?: boolean | undefined;
};

export const Input = ({
  label,
  pattern,
  title,
  onChange,
  type,
  value,
  id,
  htmlFor,
  req,
}: InputProps): JSX.Element => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={htmlFor}>
        {label}
        <br />
        <StyledInput
          aria-required="true"
          required={req}
          pattern={pattern}
          title={title}
          onChange={onChange}
          type={type}
          value={value}
          id={id}
          data-testid="test-input"
        />
      </StyledLabel>
    </StyledWrapper>
  );
};

Input.defaultProps = {
  pattern: "false",
  title: "",
  req: false,
};
