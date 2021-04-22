import React from "react";
import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import Container from "../../components/Container/Container";

const StlyedDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

const Success = (): JSX.Element => {
  return (
    <>
      <Header title="Success" />
      <Container>
        <StlyedDiv>Action Successful</StlyedDiv>
      </Container>
    </>
  );
};
export default Success;
