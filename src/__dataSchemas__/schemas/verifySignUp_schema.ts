// constraints around username/sub and code and userpool length is coming from what aws cognito defines these things to be ...
const verifySignUpSchema = {
  type: "object",
  properties: {
    code: { type: "string", length: 6 },
    username: { type: "string", length: 36 },
    userpool: { type: "string", length: 26 },
    clientId: { type: "string", minLength: 1 },
    email: { type: "string", format: "email" },
    event: { type: "string", minLength: 5 },
  },
  required: ["code", "userName", "userpool", "clientId", "email", "event"],
  additionalProperties: false,
};

export default verifySignUpSchema;
