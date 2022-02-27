import actionTypes from "../actions/actionTypes";

const profilesReducer = (currentProfiles = [], action = {}) => {
  let newProfiles;
  switch (action.type) {
    case actionTypes.loadProfiles:
      newProfiles = [...action.profiles];
      break;

    case actionTypes.updateProfile:
      newProfiles = currentProfiles.map((profile) =>
        action.profile.id === profile.id ? action.profile : profile
      );
      break;
    default:
      newProfiles = [...currentProfiles];
  }

  console.log("end", newProfiles);
  return newProfiles;
};

export default profilesReducer;
