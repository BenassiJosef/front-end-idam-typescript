import * as actions from './appActionsCreator'
import { CHANGE_APP_STATUS} from "./appActions";

describe('update app state',()=>{
    it("it should update the app state true or false depending on payload response",()=>{
        const payload  = { appState: true };
        const expectedAction = {
            type:CHANGE_APP_STATUS,
            payload: payload
        }
        const myMock = jest.fn();
        myMock.mockReturnValueOnce(expectedAction);
        expect(actions.default(myMock,payload)).toEqual(expectedAction)
        actions.default(myMock,payload)
        expect(myMock).toHaveBeenCalled();
    })
})