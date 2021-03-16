import { IsAppState, CHANGE_APP_STATUS, AppActionsTypes } from "./appActions";

type DispatchAppStatus = (arg: AppActionsTypes) => AppActionsTypes;

export default function appCreatorActionOne(
  dispatch: DispatchAppStatus,
  payload: IsAppState
): AppActionsTypes {
  return dispatch({
    type: CHANGE_APP_STATUS,
    payload: { ...payload },
  });
}
