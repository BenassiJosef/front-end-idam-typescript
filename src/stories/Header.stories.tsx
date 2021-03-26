import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Header, HeaderProps } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <Header
    user={user}
    onLogin={onLogin}
    onLogout={onLogout}
    onCreateAccount={onCreateAccount}
  />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
