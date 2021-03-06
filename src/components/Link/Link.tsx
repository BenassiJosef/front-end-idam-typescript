import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  &:active {
    color: #0036a8;
  }
`;

export interface LinkProps {
  text: string;
  href: string;
}

export const Link = ({ text, href }: LinkProps): JSX.Element => {
  return (
    <StyledLink aria-label="Link to login" href={href}>
      {" "}
      {text}
    </StyledLink>
  );
};
