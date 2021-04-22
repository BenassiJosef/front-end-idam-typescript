import React from "react";
import styled from "styled-components";

export type HeaderProps = {
  title: string;
  backgroundColor?: string | undefined;
  color?: string | undefined;
};

type StyledHeaderProps = {
  backgroundColor?: string | undefined;
  color?: string | undefined;
};

const StyledHeader = styled.header`
  display: grid;
  justify-content: center;
  width: 100%;
  color: ${({ color }: StyledHeaderProps) =>
    color && color.length >= 1 ? color : "#908f8f"};
  background-color: ${({ backgroundColor }: StyledHeaderProps) =>
    backgroundColor && backgroundColor.length >= 1
      ? backgroundColor
      : "#fdfdfd"};
  margin-bottom: 30px;
`;

const StyledH1 = styled.h1``;
const StyledDiv = styled.div``;

export const Header = ({
  title,
  backgroundColor,
  color,
}: HeaderProps): JSX.Element => {
  return (
    <StyledHeader color={color} backgroundColor={backgroundColor}>
      <StyledDiv>
        <StyledH1>{title}</StyledH1>
      </StyledDiv>
    </StyledHeader>
  );
};

Header.defaultProps = {
  backgroundColor: "#fdfdfd",
  color: "#908f8f",
};
