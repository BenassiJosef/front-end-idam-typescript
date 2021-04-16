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

interface ReducerInterface {
  name: string;
  familyName: string;
  email: string;
  username: string;
  address: string;
  password: string;
  status: number | undefined;
  data: IsRegisterState;
}

const registerReducer = (
  state = initialState,
  action: RegisterActionsTypes
): ReducerInterface => {
  switch (action.type) {
    case CHANGE_REGISTER_STATUS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return {
        ...state,
        ...action.payload,
      };
  }
};

export default registerReducer;
