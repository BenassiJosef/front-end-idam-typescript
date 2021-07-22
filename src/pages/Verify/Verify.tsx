import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import * as H from "history";
import queryString from "query-string";
import { Header } from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import verifyActionCreator from "../../redux/actions/verifyActions/verifyActionsCreator";
import IdamApiUrl from "../../utils";
import { VerifySignUpInterface } from "../../interfaces/interfaces";

const StlyedDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

export function addPlusSymbol(
  string: string | string[] | null
): string | string[] | null {
  if (typeof string === "string") return string.replace(/\s/g, "+");
  return string;
}

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
    if (event === "verifySignUp") {
      const objPayload: VerifySignUpInterface = {
        code: urlParameters.code || "",
        username: addPlusSymbol(urlParameters.username) || "",
        userpool: urlParameters.userpool || "",
        clientId: urlParameters.clientId || "",
        email: addPlusSymbol(urlParameters.email) || "",
        event: urlParameters.event || "",
      };
      return { parameters: true, payload: objPayload };
    }
  }

  return { parameters: false };
}

const Verify = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const { parameters, payload } = checkQueryParams(location);
    if (!parameters) {
      history.push("/error");
    } else {
      verifyActionCreator(
        dispatch,
        history,
        IdamApiUrl(window.location.origin),
        payload
      );
    }
  }, [history, location, dispatch]);

  return (
    <>
      <Header title="Verifiying..." />
      <Container>
        <StlyedDiv>Loading...</StlyedDiv>
      </Container>
    </>
  );
};
export default Verify;
