import React from "react";
import { Story, Meta } from "@storybook/react";
import { Link, LinkProps } from "./Link";

export default {
  title: "IDAM/Components/Link",
  component: Link,
} as Meta;

const Template: Story<LinkProps> = ({ text, href }: LinkProps) => {
  return <Link text={text} href={href} />;
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Test",
  href: "www.test.com",
};
