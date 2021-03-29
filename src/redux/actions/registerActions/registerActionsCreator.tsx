import axios from "axios";
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
  baseUrl: string
): Promise<RegisterActionsTypes> => {
  try {
    scrubPayload<IsRegisterState>(payload, "register");

    const { data, status } = await axios.post(`${baseUrl}/register`, {
      ...payload,
    });
    return dispatch({
      type: CHANGE_REGISTER_STATUS,
      payload: { status, data },
    });
  } catch (error) {
    console.error(error);
    return dispatch({
      type: CHANGE_REGISTER_STATUS,
      payload: { status: 200, data: { email: "", password: "" } },
    });
  }
};
export default registerActionCreator;
