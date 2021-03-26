import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import Button from "./button";

export default {
  title: "FirstStoryButton",
  component: Button,
};

const Template: Story<ComponentProps<typeof Button>> = () => {
  return <Button label="First Story Button" />;
};

export const FirstStory = Template.bind({});
FirstStory.args = {
  label: "Button",
};
