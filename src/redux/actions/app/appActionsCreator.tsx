import { IS_APP } from "./appActions";

/**
 * Dispatches an HTTP request to the IDAM backend for registrating
 * a user.
 *
 * @param {function} dispatch - the redux action dispatch function.
 * @param {object} payload - user credentials object to be dispatched.
 */
export default function appCreatorActionOne(dispatch :any, payload :any) {

  console.log(payload, " we made it")
  let response  = true
  return dispatch({
    type: IS_APP,
    payload:{response} ,
  });
}
