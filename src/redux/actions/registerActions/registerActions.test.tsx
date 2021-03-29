import registerActionCreator from "./registerActionsCreator";
import { CHANGE_REGISTER_STATUS } from "./registerActions";
import mockAxios from "jest-mock-axios";

describe("post registration info to server", () => {
  it("should make post request", () => {
    const payload = { email: "test@test.com", password: "test12345678" };
    const expectedAction = {
      type: CHANGE_REGISTER_STATUS,
      payload,
    };
    const url = "http://testUrl/api";
    const myMock = jest.fn();
    myMock.mockReturnValueOnce(expectedAction);
    registerActionCreator(myMock, payload, url);
    expect(mockAxios.post).toHaveBeenCalledWith(`${url}/register`, {
      email: payload.email,
      password: payload.password,
    });
  });
});
