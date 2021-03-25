import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: red;
  width: 500px;
  height: 200px;
`;

interface Props {
  label: string;
}

const Button = ({ label }: Props): JSX.Element => {
  return <Btn>{label}</Btn>;
};

export default Button;
