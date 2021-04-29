export interface VerifyPost {
  status: number;
}

export const VERIFICATION_STATUS = "VERIFICATION_STATUS";

interface VerifyStatus {
  type: typeof VERIFICATION_STATUS;
  payload: VerifyPost;
}

export type VerifyActionsTypes = VerifyStatus;
