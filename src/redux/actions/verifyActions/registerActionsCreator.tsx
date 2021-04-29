import axios from "axios";
import { History } from "history";
import { VerifyPost, VerifyActionsTypes } from "./verifyActions";

import scrubPayload from "../../../__dataSchemas__/utils";

type DispatchAppStatus = (arg: VerifyActionsTypes) => VerifyActionsTypes;

const verifyActionCreator = async (
  // dispatch: DispatchAppStatus,
  payload: Record<string, string>
  // baseUrl: string,
  // history: History
) => {
  console.log(payload);
};
export default verifyActionCreator;
