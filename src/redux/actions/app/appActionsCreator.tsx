import { IS_APP } from "./appActions";

export default function appCreatorActionOne( dispatch:Function , payload:boolean) {
  console.log(payload, " we made it")
  let response  = true
  return dispatch({
    type: IS_APP,
    payload:{response} ,
  });
}
