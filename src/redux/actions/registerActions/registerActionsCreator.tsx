import axios from "axios";
import {
  IsRegisterState,
  CHANGE_REGISTER_STATUS,
  RegisterActionsTypes,
} from "./registerActions";
import IdamApiUrl from "../../../utils";

type DispatchAppStatus = (arg: RegisterActionsTypes) => RegisterActionsTypes;

const registerActionCreator = async (
  dispatch: DispatchAppStatus,
  payload: IsRegisterState
): Promise<RegisterActionsTypes> => {
  try {
    const response = await axios.post(`${IdamApiUrl()}/register`, {
      ...payload,
    });
    const { status } = response;
    console.log(status);
    return dispatch({
      type: CHANGE_REGISTER_STATUS,
      payload: { ...payload },
    });
  } catch (error) {
    console.log(error);
    return {
      type: CHANGE_REGISTER_STATUS,
      payload: { email: "", password: "" },
    };
  }
};

export default registerActionCreator;
