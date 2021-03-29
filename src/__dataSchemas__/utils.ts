import ajv from "./validation";

const scrubPayload = <T>(payload: T, schemaName: string): boolean => {
  const validate = ajv.getSchema(schemaName);

  if (!validate) throw new Error("getSchema returned undefined");

  // valid will return true or false based on the ajv api
  const valid = validate(payload);

  if (!valid) throw new Error("validate schema returned false");

  return true;
};

export default scrubPayload;
