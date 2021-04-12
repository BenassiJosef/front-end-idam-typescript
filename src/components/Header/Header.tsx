import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  justify-content: center;
  width: 100%;
`;

const StyledH1 = styled.h1``;
const StyledDiv = styled.div``;

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <StyledHeader className="container">
      <StyledDiv>
        <StyledH1>{title}</StyledH1>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
