export interface IsRegisterState {
  email: string;
  password: string;
}

export const CHANGE_REGISTER_STATUS = "CHANGE_REGISTER_STATUS ";

interface ChangeRegisterStatus {
  type: typeof CHANGE_REGISTER_STATUS;
  payload: IsRegisterState;
}

export type RegisterActionsTypes = ChangeRegisterStatus;
