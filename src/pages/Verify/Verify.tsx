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

const Verify = (): JSX.Element => {
  // useState for title  ternary ...verifying to verified ....
  // spinner on useState as well
  // also in the aws custom message url parameter ...pass in the type of thing we are verifiying... and on that we can figure out what to say to the user....
  // create a function that takes use location and thing we want to source from the url and return an object we can use as payload to send to server
  // creat an avj schema model we can then compare the payload to before we send to server
  return (
    <>
      <Header title="Verifiying..." />
      <Container>
        <StlyedDiv>loading...</StlyedDiv>
      </Container>
    </>
  );
};
export default Verify;
