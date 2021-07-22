import registerActionCreator from "./registerActionsCreator";
import { CHANGE_REGISTER_STATUS } from "./registerActions";
import mockAxios from "jest-mock-axios";
import { useHistory } from "react-router-dom";

const url = "http://testUrl/api/v1";
const myMock = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const history = useHistory();

describe("post registration info to server", () => {
  it("should make post request", () => {
    const payload = {
      name: "test",
      familyName: "testerson",
      email: "test@test.com",
      username: "test@test.com",
      address: "lane123456",
      password: "test12345678",
    };
    const expectedAction = {
      type: CHANGE_REGISTER_STATUS,
      payload,
    };
    myMock.mockReturnValueOnce(expectedAction);
    registerActionCreator(myMock, payload, url, history);
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

describe("function makes no post if data/payload is not correct", () => {
  it("should make post request", () => {
    const payload = {
      name: "test",
      familyName: "",
      email: "test@test.com",
      username: "testtest.com",
      address: "lane123456",
      password: "test1234",
    };
    const expectedAction = {
      type: CHANGE_REGISTER_STATUS,
      payload,
    };
    myMock.mockReturnValueOnce(expectedAction);
    registerActionCreator(myMock, payload, url, history);
    expect(mockAxios.post).toHaveBeenCalledTimes(0);
  });
});
