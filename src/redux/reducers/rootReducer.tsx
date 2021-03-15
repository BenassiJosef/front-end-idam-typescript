import { combineReducers } from "redux";
import appReducer from "./appReducer/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
});

type NewType = typeof rootReducer;

export type RootState = ReturnType<NewType>;
export default rootReducer;
