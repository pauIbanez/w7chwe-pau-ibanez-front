import actionTypes from "./actionTypes";

export const loadProfilesAction = (profiles) => ({
  type: actionTypes.loadProfiles,
  profiles,
});

export const loadProfileAction = (profile) => ({
  type: actionTypes.loadProfile,
  profile,
});

export const updateProfileAction = (profile) => ({
  type: actionTypes.updateProfile,
  profile,
});
