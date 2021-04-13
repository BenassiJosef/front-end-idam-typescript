import React from "react";
import { Story, Meta } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
  title: "IDAM/Components/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = ({
  label,
  pattern,
  title,
  onChange,
  type,
  value,
  id,
  htmlFor,
}: InputProps) => {
  return (
    <Input
      label={label}
      type={type}
      value={value}
      pattern={pattern}
      title={title}
      id={id}
      onChange={onChange}
      htmlFor={htmlFor}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Test",
  pattern: ".{2,}",
  title: "test",
  onChange: () => "test",
  type: "test",
  value: "test",
  id: "test",
  htmlFor: "test",
};
