import {
  IsRegisterState,
  RegisterActionsTypes,
  CHANGE_REGISTER_STATUS,
} from "../../actions/registerActions/registerActions";

const initialState: IsRegisterState = {
  name: "",
  familyName: "",
  email: "",
  username: "",
  address: "",
  password: "",
};

const registerReducer = (
  state = initialState,
  action: RegisterActionsTypes
): IsRegisterState => {
  switch (action.type) {
    case CHANGE_REGISTER_STATUS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default registerReducer;
