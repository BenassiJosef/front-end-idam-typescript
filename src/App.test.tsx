import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import App from "./App";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Click Me/i);
  expect(linkElement).toBeInTheDocument();
});
