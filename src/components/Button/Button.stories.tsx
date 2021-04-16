import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, Props } from "./Button";

export default {
  title: "IDAM/Components/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = ({ intent, disabled }: Props) => {
  return (
    <Button intent={intent} disabled={disabled}>
      Button
    </Button>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  disabled: false,
};
