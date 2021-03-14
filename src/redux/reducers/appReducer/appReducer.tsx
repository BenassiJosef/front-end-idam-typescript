import * as actions from "../../actions/app/appActions";

const initialState = {
  isApp: {response:false},
};

const appReducer = (
  state = initialState,
  action = { type:"", payload: {} }
) => {
  if (action.type === actions.IS_APP) {
    return {
      ...state,
      isApp: action.payload,
    };
  }

  return state;
};

export default appReducer;