import { loadProfilesAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given loadProfilesAction", () => {
  describe("When it's called passing 2 profiles", () => {
    test("Then it should return an action with type loadProfiles and the 2 profiles", () => {
      const profiles = [
        {
          name: "sdadsa",
        },
        {
          name: "asdfas",
        },
      ];

      const expectedAction = {
        type: actionTypes.loadProfiles,
        profiles,
      };

      const action = loadProfilesAction(profiles);

      expect(action).toEqual(expectedAction);
    });
  });
});
