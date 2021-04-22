import axios from "axios";
import { History } from "history";
import {
  IsRegisterState,
  CHANGE_REGISTER_STATUS,
  RegisterActionsTypes,
} from "./registerActions";

import scrubPayload from "../../../__dataSchemas__/utils";

type DispatchAppStatus = (arg: RegisterActionsTypes) => RegisterActionsTypes;

const registerActionCreator = async (
  dispatch: DispatchAppStatus,
  payload: IsRegisterState,
  baseUrl: string,
  history: History
): Promise<RegisterActionsTypes> => {
  try {
    scrubPayload<IsRegisterState>(payload, "register");

    const { data, status } = await axios.post(`${baseUrl}/register`, {
      ...payload,
    });
    if (status === 200) {
      history.push("/success");
      return dispatch({
        type: CHANGE_REGISTER_STATUS,
        payload: { status, data },
      });
    }
    return dispatch({
      type: CHANGE_REGISTER_STATUS,
      payload: { status, data },
    });
  } catch (error) {
    return dispatch({
      type: CHANGE_REGISTER_STATUS,
      payload: {
        status: 404,
        data: {
          name: "",
          familyName: "",
          email: "",
          username: "",
          address: "",
          password: "",
        },
      },
    });
  }
};
export default registerActionCreator;
