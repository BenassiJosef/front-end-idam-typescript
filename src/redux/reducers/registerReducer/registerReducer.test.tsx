import React from "react";
import registerReducer from "./registerReducer";
import { CHANGE_REGISTER_STATUS } from "../../actions/registerActions/registerActions";

test("that registerReducer function returns state", () => {
  const payload = {
    name: "test",
    familyName: "testing",
    email: "testing@test.com",
    username: "testing@test.com",
    address: "123 test street",
    password: "123456789",
  };

  const { data } = registerReducer(undefined, {
    type: CHANGE_REGISTER_STATUS,
    payload: { status: 200, data: payload },
  });

  expect(data).toEqual(payload);
});
