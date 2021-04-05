import registerActionCreator from "./registerActionsCreator";
import { CHANGE_REGISTER_STATUS } from "./registerActions";
import mockAxios from "jest-mock-axios";

describe("post registration info to server", () => {
  it("should make post request", () => {
    const payload = {
      name: "",
      familyName: "",
      email: "test@test.com",
      username: "",
      address: "",
      password: "test12345678",
    };
    const expectedAction = {
      type: CHANGE_REGISTER_STATUS,
      payload,
    };
    const url = "http://testUrl/api";
    const myMock = jest.fn();
    myMock.mockReturnValueOnce(expectedAction);
    registerActionCreator(myMock, payload, url);
    expect(mockAxios.post).toHaveBeenCalledWith(`${url}/register`, {
      name: payload.name,
      familyName: payload.familyName,
      email: payload.email,
      username: payload.username,
      address: payload.address,
      password: payload.password,
    });
  });
});
