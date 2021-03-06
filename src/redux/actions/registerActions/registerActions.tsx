export interface IsRegisterState {
  name: string;
  familyName: string;
  email: string;
  username: string;
  address: string;
  password: string;
}

export interface RegisterPost {
  status: number;
  data: IsRegisterState;
}

export const CHANGE_REGISTER_STATUS = "CHANGE_REGISTER_STATUS ";

interface ChangeRegisterStatus {
  type: typeof CHANGE_REGISTER_STATUS;
  payload: RegisterPost;
}

export type RegisterActionsTypes = ChangeRegisterStatus;
