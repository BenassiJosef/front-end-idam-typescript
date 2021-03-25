import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import RegisterAction from "../../redux/actions/registerActions/registerActionsCreator";
import { IsRegisterState } from "../../redux/actions/registerActions/registerActions";
import Button from "../../components/button/button";

const Register = (): JSX.Element => {
  const registerResp: IsRegisterState = useSelector(
    (state: RootState) => state.register
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [registerResp]);

  return (
    <div>
      <header>
        <button
          type="button"
          onClick={() => {
            RegisterAction(dispatch, { registerState: true });
          }}
        >
          Register Page
        </button>
        <Button label="Button works" />
      </header>
    </div>
  );
};
export default Register;
