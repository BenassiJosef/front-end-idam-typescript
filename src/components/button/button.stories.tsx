import React from "react";
import { Story } from "@storybook/react";
import { Button, Props } from "./button";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<Props> = ({ intent, disabled }: Props) => {
  return <Button intent={intent} disabled={disabled} />;
};

export const FirstStory = Template.bind({});
FirstStory.args = {
  intent: "primary",
  disabled: false,
};
