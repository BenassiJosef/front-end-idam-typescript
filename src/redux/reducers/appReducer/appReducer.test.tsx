import appReducer from "./appReducer";
import { CHANGE_APP_STATUS } from "../../actions/app/appActions";

describe("app status reducer", () => {
  it("should return the initial state", () => {
    expect(
      appReducer(undefined, {
        type: CHANGE_APP_STATUS,
        payload: { appState: false },
      })
    ).toEqual({
      appState: false,
    });
  });
  it("should handle CHANGE_APP_STATUS", () => {
    expect(
      appReducer(
        { appState: false },
        {
          type: CHANGE_APP_STATUS,
          payload: { appState: true },
        }
      )
    ).toEqual({
      appState: true,
    });
  });
});
