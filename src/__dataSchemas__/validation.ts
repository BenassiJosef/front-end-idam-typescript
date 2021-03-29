import Ajv from "ajv";
import RegisterSchema from "./schemas/register_schema";

const ajv = new Ajv();
ajv.addSchema(RegisterSchema, "register");
ajv.compile(RegisterSchema);

export default ajv;
