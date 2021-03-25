export interface IsRegisterState {
  registerState: boolean;
}

export const CHANGE_REGISTER_STATUS = "CHANGE_REGISTER_STATUS ";

interface ChangeRegisterStatus {
  type: typeof CHANGE_REGISTER_STATUS;
  payload: IsRegisterState;
}

export type RegisterActionsTypes = ChangeRegisterStatus;
