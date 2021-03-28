import * as actions from "./registerActionsCreator";
import { CHANGE_REGISTER_STATUS } from "./registerActions";

describe("update application state", () => {
  it("should update the app state", () => {
    const payload = { email: "test@test.com", password: "test12345678" };
    const expectedAction = {
      type: CHANGE_REGISTER_STATUS,
      payload,
    };
    const myMock = jest.fn();
    myMock.mockReturnValueOnce(expectedAction);
    expect(actions.default(myMock, payload)).toEqual(expectedAction);
    actions.default(myMock, payload);
    expect(myMock).toHaveBeenCalled();
  });
});
