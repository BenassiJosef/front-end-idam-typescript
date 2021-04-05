const RegisterSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1 },
    familyName: { type: "string", minLength: 1 },
    email: { type: "string", format: "email" },
    username: { type: "string", format: "email" },
    address: { type: "string", minLength: 1 },
    password: { type: "string", minLength: 8 },
  },
  required: ["name", "familyName", "email", "username", "address", "password"],
  additionalProperties: false,
};

export default RegisterSchema;
