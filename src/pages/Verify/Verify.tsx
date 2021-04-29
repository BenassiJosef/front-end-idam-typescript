import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import * as H from "history";
import queryString from "query-string";
import { Header } from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import verifyActionCreator from "../../redux/actions/verifyActions/verifyActionsCreator";

const StlyedDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

function checkQueryParams(location: H.Location) {
  const values = queryString.parse(location?.search);
  if (values.event !== undefined || values.event !== "") {
    return { parameters: true, values };
  }
  return { parameters: false };
}

const Verify = (): JSX.Element => {
  // in lambda function we wan to add event url paramter so we will know what we are goin to look for in the url
  // first we want know what action we are verifying - "verifySignUp"
  // useState for title  ternary ...verifying to verified ....
  // spinner on useState as well
  // also in the aws custom message url parameter ...pass in the type of thing we are verifiying... and on that we can figure out what to say to the user....
  // create a function that takes use location and thing we want to source from the url and return an object we can use as payload to send to server
  // creat an avj schema model we can then compare the payload to before we send to server
  // http://localhost:3000/verify?code=201131&username=3a4eab50-95ea-47a4-ba7e-2f39a2db6cd3&userpool=test-cdk&client_id=69kqvnfa1askqn622e09msktfv&email=benassijosef+04@gmail.com
  // getParameters("code", "username");
  const history = useHistory();
  const location = useLocation();
  const { parameters, values } = checkQueryParams(location);

  useEffect(() => {
    if (parameters) {
      verifyActionCreator(values);
    } else {
      history.push("/error");
    }
  }, [history, values, parameters]);

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
