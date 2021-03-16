// orginal state we want our state to be .. ie boolean false
export interface IsAppState {
  appState: boolean;
}

// then we want to define the data that we are sending
export const CHANGE_APP_STATUS = "CHANGE_APP_STATUS ";

interface ChangeAppStatus {
  type: typeof CHANGE_APP_STATUS;
  payload: IsAppState;
}

export type AppActionsTypes = ChangeAppStatus;
