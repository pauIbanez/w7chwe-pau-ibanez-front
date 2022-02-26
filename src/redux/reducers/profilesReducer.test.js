import actionTypes from "../actions/actionTypes";
import profilesReducer from "./profilesReducer";

describe("Given profilesReducer", () => {
  describe("When it's instanciated passing nothing", () => {
    test("Then it should return an empty array", () => {
      const expectedNewProfiles = [];

      const newProfiles = profilesReducer();

      expect(newProfiles).toEqual(expectedNewProfiles);
    });
  });

  describe("When it's instanciated passing 3 profiles and a loadProfiles action with 2 profiles", () => {
    test("Then it should return the 2 profiles from the action", () => {
      const expectedNewProfiles = [
        {
          name: "sadasd",
        },
        {
          name: "asdasda",
        },
        {
          name: "asdasdasda",
        },
      ];

      const currentProfiles = [
        {
          name: "asdafds",
        },
        {
          name: "asdasdadsad",
        },
      ];

      const action = {
        type: actionTypes.loadProfiles,
        profiles: expectedNewProfiles,
      };

      const newProfiles = profilesReducer(currentProfiles, action);

      expect(newProfiles).toEqual(expectedNewProfiles);
    });
  });

  describe("When it's instanciated passing 3 profiles and a updatePRofile action with a profile", () => {
    test("Then it should return the 3 profiles with the one from the action updated", () => {
      const expectedNewProfiles = [
        {
          name: "sadasd",
          id: "0",
        },
        {
          name: "asdasda",
          id: "1",
        },
        {
          name: "updated",
          id: "2",
        },
      ];
      const currentProfiles = [
        {
          name: "sadasd",
          id: "0",
        },
        {
          name: "asdasda",
          id: "1",
        },
        {
          name: "asdasdasda",
          id: "2",
        },
      ];

      const profile = {
        name: "updated",
        id: "2",
      };

      const action = {
        type: actionTypes.updateProfile,
        profile,
      };

      const newProfiles = profilesReducer(currentProfiles, action);

      expect(newProfiles).toEqual(expectedNewProfiles);
    });
  });
});
