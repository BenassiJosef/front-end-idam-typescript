import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import * as H from "history";
import queryString from "query-string";
import { Header } from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import verifyActionCreator from "../../redux/actions/verifyActions/verifyActionsCreator";
import IdamApiUrl from "../../utils";

const StlyedDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

function checkIfEventType(event: string | string[]): boolean {
  switch (event) {
    case "verifySignUp":
      return true;
    default:
      return false;
  }
}

function checkQueryParams(location: H.Location) {
  const urlParameters = queryString.parse(location?.search);
  const event = urlParameters.event || "";

  if (checkIfEventType(event)) {
    return { parameters: true, values: urlParameters };
  }

  return { parameters: false };
}

const Verify = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    verifyActionCreator(
      () => {},
      history,
      IdamApiUrl(window.location.origin),
      checkQueryParams(location)
    );
  }, [history, location]);

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
