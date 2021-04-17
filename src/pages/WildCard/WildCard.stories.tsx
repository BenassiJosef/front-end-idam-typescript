import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import WildCard from "./WildCard";

export default {
  title: "IDAM/Pages/WildCard",
  component: WildCard,
} as Meta;

const Template: Story = () => <WildCard />;

export const WildCardPage = Template.bind({});
