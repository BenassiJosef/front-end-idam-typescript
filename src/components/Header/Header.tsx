import React from "react";
import styled from "styled-components";

export type HeaderProps = {
  title: string;
  background_color: string;
  color: string;
};

type StyledHeaderProps = {
  background_color: string;
  color: string;
};

const StyledHeader = styled.header`
  display: grid;
  justify-content: center;
  width: 100%;
  color: ${({ color }: StyledHeaderProps) =>
    color.length >= 1 ? color : "white"};
  background-color: ${({ background_color }: StyledHeaderProps) =>
    background_color.length >= 1 ? background_color : "white"};
  margin-bottom: 30px;
`;

const StyledH1 = styled.h1``;
const StyledDiv = styled.div``;

export const Header = ({
  title,
  background_color,
  color,
}: HeaderProps): JSX.Element => {
  return (
    <StyledHeader color={color} background_color={background_color}>
      <StyledDiv>
        <StyledH1>{title}</StyledH1>
      </StyledDiv>
    </StyledHeader>
  );
};
