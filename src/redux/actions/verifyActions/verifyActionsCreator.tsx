import axios from "axios";
import { History } from "history";
import scrubPayload from "../../../__dataSchemas__/utils";
import { VerifyActionsTypes, VERIFY_STATUS } from "./verifyActions";
import { VerifySignUpInterface } from "../../../interfaces/interfaces";

type DispatchAppStatus = (arg: VerifyActionsTypes) => VerifyActionsTypes;

const verifyActionCreator = async (
  dispatch: DispatchAppStatus,
  history: History,
  baseUrl: string,
  payload: VerifySignUpInterface | undefined
): Promise<any> => {
  try {
    if (payload) {
      scrubPayload(payload, payload.event);
      const { status } = await axios.post(`${baseUrl}/verify`, {
        ...payload,
      });
      if (status === 200) {
        dispatch({
          type: VERIFY_STATUS,
          payload: { status: 200 },
        });
        history.push("/success");
      } else {
        dispatch({
          type: VERIFY_STATUS,
          payload: { status },
        });
        history.push("/error");
      }
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: VERIFY_STATUS,
      payload: { status: 404 },
    });
  }
};

export default verifyActionCreator;
