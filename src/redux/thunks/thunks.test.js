import actionTypes from "../actions/actionTypes";
import { loadProfilesThunk } from "./thunks";

describe("Given loadProfilesThunk", () => {
  describe("When it's instanciated with a dispatch", () => {
    test("Then it should call dispatch with the recieved profiles", async () => {
      const expectedProfiles = [
        {
          name: "person1",
        },
        {
          name: "person2",
        },
      ];

      const dispatch = jest.fn();
      const expectedAction = {
        type: actionTypes.loadProfiles,
        profiles: expectedProfiles,
      };

      await loadProfilesThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
