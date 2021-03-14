import { isAppState, CHANGE_APP_STATUS, AppActionsTypes  } from "./appActions";

export default function appCreatorActionOne( dispatch:Function , payload:isAppState) : AppActionsTypes{
  return dispatch({
    type: CHANGE_APP_STATUS,
    payload:{...payload} ,
  });
}
