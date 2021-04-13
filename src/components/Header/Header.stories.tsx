import React from "react";
import { Story, Meta } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "IDAM/Components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = ({
  title,
  background_color,
  color,
}: HeaderProps) => {
  return (
    <Header title={title} background_color={background_color} color={color} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: "This is a Header",
  background_color: "green",
  color: "pink",
};
