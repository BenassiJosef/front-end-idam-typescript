import axios from "axios";
import scrubPayload from "../../../__dataSchemas__/utils";

const verifyActionCreator = async (
  dispatch: any,
  history: any,
  baseUrl: string,
  payload: any
): Promise<any> => {
  const { parameters, values } = payload;

  if (!parameters) {
    history.push("/error");
  }

  // ************ schema is not liking it when there is a plus symbol in email check this out !!!! */
  try {
    // we can pass the event type to get the correct schema seeing as this verify function will do all types of verification.
    // so for example if the event type is verifySignUp then we will pass it to scrub payload as the shcema we want to check against
    scrubPayload(values, values.event);
    const { data, status } = await axios.post(`${baseUrl}/register`, {
      ...payload,
    });
    if (status === 200) {
      console.log("well we made it here");
    }
  } catch (error) {
    console.log(error);
  }
};

export default verifyActionCreator;
