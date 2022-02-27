import actionTypes from "../actions/actionTypes";
import { getLoadProfileThunk, loadProfilesThunk } from "./thunks";

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

describe("Given loadProfileThunk", () => {
  describe("When it's instanciated with a valid id and dispatch", () => {
    test("Then it should call dispatch with the recieved profile", async () => {
      const expectedProfile = {
        name: "paquito",
      };

      const dispatch = jest.fn();
      const expectedAction = {
        type: actionTypes.updateProfile,
        profile: expectedProfile,
      };
      const id = 3;

      const thunk = getLoadProfileThunk(id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's instanciated with an invalid id and dispatch", () => {
    test("Then it should NOT call dispatch", async () => {
      const dispatch = jest.fn();

      const id = 4;

      const thunk = getLoadProfileThunk(id);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
