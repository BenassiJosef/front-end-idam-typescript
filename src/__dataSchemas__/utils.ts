import ajv from "./validation";

const scrubPayload = <T>(
  payload: T,
  schemaName: string | string[]
): boolean => {
  if (typeof payload === "string") {
    const validate = ajv.validate(schemaName, payload);
    const errs = ajv.errors;
    if (!validate) {
      if (errs) {
        // can use these error messages to display to the user. Maybe work on a Errors redux action creator and component
        throw new Error(errs[0].message);
      }
      throw new Error("validating schema resulted in Error");
    }
    return true;
  }

  return false;
};

export default scrubPayload;
