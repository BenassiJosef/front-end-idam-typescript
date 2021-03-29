import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import registerActionCreator from "../../redux/actions/registerActions/registerActionsCreator";
import { IsRegisterState } from "../../redux/actions/registerActions/registerActions";
import useFormFields from "../../hooks/useFormFields";
import { Button } from "../../components/button/button";
import IdamApiUrl from "../../utils";

const Register = (): JSX.Element => {
  const registerResp: IsRegisterState = useSelector(
    (state: RootState) => state.register
  );
  const dispatch = useDispatch();

  const { formFields, createChangeHandler } = useFormFields({
    email: "",
    password: "",
  });

  useEffect(() => {
    // console.log(registerResp);
  }, [registerResp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerActionCreator(dispatch, formFields, IdamApiUrl());
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            required
            value={formFields.email}
            aria-required="true"
            onChange={createChangeHandler("email")}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={formFields.password}
            pattern=".{8,}"
            required
            aria-required="true"
            title="8 characters minimum"
            onChange={createChangeHandler("password")}
          />
        </label>
        <Button type="submit" intent="primary" disabled={false}>
          {" "}
          Submit
        </Button>
      </div>
    </form>
  );
};
export default Register;
