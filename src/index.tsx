/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store";

if (process.env.NODE_ENV === "development") {
  require("./__msw__/browser");
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
