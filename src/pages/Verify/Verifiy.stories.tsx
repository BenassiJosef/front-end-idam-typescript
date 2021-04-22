import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Verify from "./Verify";

export default {
  title: "IDAM/Pages/Verify",
  component: Verify,
} as Meta;

const Template: Story = () => <Verify />;

export const VerifyPage = Template.bind({});
