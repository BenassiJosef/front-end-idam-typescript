import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import registerActionCreator from "../../redux/actions/registerActions/registerActionsCreator";
import { IsRegisterState } from "../../redux/actions/registerActions/registerActions";
import useFormFields from "../../hooks/useFormFields/useFormFields";
import { Button } from "../../components/Button/Button";
import IdamApiUrl from "../../utils";
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { Link } from "../../components/Link/Link";
import Container from "../../components/Container/Container";

interface RegisterFields {
  name: string;
  familyName: string;
  email: string;
  username: string;
  address: string;
  password: string;
}

const Register = (): JSX.Element => {
  const registerResp: IsRegisterState = useSelector(
    (state: RootState) => state.register
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const { formFields, createChangeHandler } = useFormFields<RegisterFields>({
    name: "",
    familyName: "",
    email: "",
    username: "",
    address: "",
    password: "",
  });

  useEffect(() => {}, [registerResp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerActionCreator(dispatch, formFields, IdamApiUrl(), history);
  };
  return (
    <>
      <Header title="Register" />
      <Container>
        <Form
          onSubmit={handleSubmit}
          formContent={
            <>
              <Input
                label="First Name"
                type="text"
                value={formFields.name}
                pattern=".{2,}"
                title="More than one character"
                id="name"
                onChange={createChangeHandler("name")}
                htmlFor="name"
                req
              />
              <Input
                label="Second Name"
                type="text"
                value={formFields.familyName}
                pattern=".{2,}"
                title="More than one character"
                id="familyName"
                onChange={createChangeHandler("familyName")}
                htmlFor="familyName"
                req
              />
              <Input
                label="Email"
                type="text"
                value={formFields.email}
                id="email"
                pattern=".{5,}"
                onChange={createChangeHandler("email")}
                htmlFor="email"
                req
                title="Amount of character to construct email"
              />
              <Input
                label="Username"
                type="email"
                value={formFields.username}
                id="username"
                pattern=".{5,}"
                onChange={createChangeHandler("username")}
                htmlFor="username"
                req
                title="Amount of character to construct email"
              />
              <Input
                label="Address"
                type="text"
                value={formFields.address}
                id="address"
                pattern=".{1,}"
                title="Cannot be empty"
                onChange={createChangeHandler("address")}
                htmlFor="address"
                req
              />
              <Input
                label="Password"
                type="text"
                value={formFields.password}
                id="password"
                pattern=".{9,}"
                title="8 characters minimum"
                onChange={createChangeHandler("password")}
                htmlFor="password"
                req
              />
              <Button type="submit" intent="primary" disabled={false}>
                {" "}
                Submit
              </Button>
            </>
          }
        />
        <p>
          Already have an account? <Link text="Login" href="/login" />
        </p>
      </Container>
    </>
  );
};
export default Register;
