import React from "react";
import { Story, Meta } from "@storybook/react";
import { Form, FormProps } from "./Form";
import { Button } from "../dfdfd/fdfdfdf.";
import { Input } from "../Input/Input";

export default {
  title: "IDAM/Components/Form",
  component: Form,
} as Meta;
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};
const Template: Story<FormProps> = ({ onSubmit, formContent }: FormProps) => {
  return <Form onSubmit={onSubmit} formContent={formContent} />;
};

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: handleSubmit,
  formContent: (
    <>
      <Input
        label="First Name"
        type="text"
        value=""
        pattern=".{2,}"
        title="More than one character"
        id="name"
        onChange={() => "story"}
        htmlFor="name"
        req
      />
      <Input
        label="Second Name"
        type="text"
        value=""
        pattern=".{2,}"
        title="More than one character"
        id="familyName"
        onChange={() => "story"}
        htmlFor="familyName"
        req
      />
      <Button type="submit" intent="primary" disabled={false}>
        {" "}
        Submit
      </Button>
    </>
  ),
};
