import { combineReducers } from "redux";
import registerReducer from "./registerReducer/registerReducer";

const rootReducer = combineReducers({
  register: registerReducer,
});

type NewType = typeof rootReducer;

export type RootState = ReturnType<NewType>;
export default rootReducer;
