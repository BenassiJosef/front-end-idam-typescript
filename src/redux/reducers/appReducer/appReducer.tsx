import {
  isAppState,
  AppActionsTypes,
  CHANGE_APP_STATUS,
} from "../../actions/app/appActions";

const initialState: isAppState = {
  appState: false,
};

const appReducer = (state = initialState, action: AppActionsTypes) => {
  switch (action.type) {
    case CHANGE_APP_STATUS:
      return {
        ...state,
        appState: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
