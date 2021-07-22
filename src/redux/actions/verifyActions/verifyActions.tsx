export interface VerifyPost {
  status: number;
}

export const VERIFY_STATUS = "CHANGE_REGISTER_STATUS ";

interface VerifyStatus {
  type: typeof VERIFY_STATUS;
  payload: VerifyPost;
}

export type VerifyActionsTypes = VerifyStatus;
