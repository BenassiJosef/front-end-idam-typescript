import React from "react";
import { useEffect } from "react";
import "./App.css";
import { RootState } from "./redux/reducers/rootReducer";
import appCreatorActionOne from "./redux/actions/app/appActionsCreator";
import { useSelector, useDispatch } from "react-redux";
import { isAppState } from "./redux/actions/app/appActions";

function App() {
  const appResp: isAppState = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(appResp.appState);
  }, [appResp]);

  return (
    <div className="App">
      <header className="App-header">
        <button
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
