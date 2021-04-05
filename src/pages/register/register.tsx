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
    name: "",
    familyName: "",
    email: "",
    username: "",
    address: "",
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
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            value={formFields.name}
            pattern=".{1,}"
            required
            aria-required="true"
            title="Cannot be empty"
            onChange={createChangeHandler("name")}
          />
        </label>
      </div>
      <div>
        <label htmlFor="secondName">
          Second Name
          <input
            type="text"
            id="secondName"
            value={formFields.familyName}
            pattern=".{1,}"
            required
            aria-required="true"
            title="Cannot be empty"
            onChange={createChangeHandler("familyName")}
          />
        </label>
      </div>
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
      <label htmlFor="username">
        Username
        <input
          type="email"
          id="username"
          value={formFields.username}
          required
          onChange={createChangeHandler("username")}
        />
      </label>
      <div>
        <label htmlFor="address">
          Address
          <input
            type="text"
            id="address"
            value={formFields.address}
            pattern=".{1,}"
            required
            aria-required="true"
            title="Cannot be empty"
            onChange={createChangeHandler("address")}
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
