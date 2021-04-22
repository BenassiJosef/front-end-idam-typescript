import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Success from "./Success";

export default {
  title: "IDAM/Pages/Success",
  component: Success,
} as Meta;

const Template: Story = () => <Success />;

export const SuccessPage = Template.bind({});
