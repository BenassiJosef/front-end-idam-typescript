import React from "react";
import { render} from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import App from "./App";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

test("renders app", () => {
  let app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(app).toMatchSnapshot()
});
