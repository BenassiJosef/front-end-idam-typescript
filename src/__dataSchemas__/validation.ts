import Ajv from "ajv";
import RegisterSchema from "./schemas/register_schema";
import verifySignUpSchema from "./schemas/verifySignUp_schema";

const ajv = new Ajv();
ajv.addSchema(RegisterSchema, "register");
ajv.compile(RegisterSchema);

ajv.addSchema(verifySignUpSchema, "verifySignUp");
ajv.compile(verifySignUpSchema);

export default ajv;
