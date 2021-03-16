import {
  IsAppState,
  AppActionsTypes,
  CHANGE_APP_STATUS,
} from "../../actions/app/appActions";

const initialState: IsAppState = {
  appState: false,
};

const appReducer = (
  state = initialState,
  action: AppActionsTypes
): IsAppState => {
  switch (action.type) {
    case CHANGE_APP_STATUS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
