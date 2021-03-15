// orginal state we want our state to be .. ie boolean false
export interface isAppState {
  appState: boolean;
}

// then we want to define the data that we are sending
export const CHANGE_APP_STATUS: string = "CHANGE_APP_STATUS ";

interface ChangeAppStatus {
  type: typeof CHANGE_APP_STATUS;
  payload: isAppState;
}

export type AppActionsTypes = ChangeAppStatus;
