import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/reducers/rootReducer";
import appCreatorActionOne from "./redux/actions/app/appActionsCreator";
import { IsAppState } from "./redux/actions/app/appActions";

function App(): JSX.Element {
  const appResp: IsAppState = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {}, [appResp]);

  return (
    <div className="App">
      <header className="App-header">
        <button
          type="button"
          onClick={() => {
            appCreatorActionOne(dispatch, { appState: true });
          }}
        >
          Click Me
        </button>
      </header>
    </div>
  );
}
export default App;
