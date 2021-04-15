import React from "react";
import Register from "./Register";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";

const mockStore = configureMockStore([thunk]);

test("register component renders without crashing", () => {
  const store = mockStore({});
  const wrapper = render(
    <Provider store={store}>
      <Register />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
