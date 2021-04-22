import React from "react";
import { Story, Meta } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "IDAM/Components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = ({
  title,
  backgroundColor,
  color,
}: HeaderProps) => {
  return (
    <Header title={title} backgroundColor={backgroundColor} color={color} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: "This is a Header",
  backgroundColor: "green",
  color: "pink",
};
