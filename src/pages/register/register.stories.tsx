import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import Register from "./register";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

export default {
  title: "IDAM/Pages/Register",
  component: Register,
} as Meta;

const Template: Story = () => (
  <Provider store={store}>
    <Register />
  </Provider>
);

export const RegisterPage = Template.bind({});
