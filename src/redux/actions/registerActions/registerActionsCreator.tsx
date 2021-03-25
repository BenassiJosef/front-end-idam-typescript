import {
  IsRegisterState,
  CHANGE_REGISTER_STATUS,
  RegisterActionsTypes,
} from "./registerActions";

type DispatchAppStatus = (arg: RegisterActionsTypes) => RegisterActionsTypes;

const RegisterAction = (
  dispatch: DispatchAppStatus,
  payload: IsRegisterState
): RegisterActionsTypes => {
  return dispatch({
    type: CHANGE_REGISTER_STATUS,
    payload: { ...payload },
  });
};

export default RegisterAction;
