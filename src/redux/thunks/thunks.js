import axios from "axios";
import {
  loadProfilesAction,
  updateProfileAction,
} from "../actions/actionCreators";

export const loadProfilesThunk = async (dispatch) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}profiles/list`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  dispatch(loadProfilesAction(data.profiles));
};

export const getLoadProfileThunk = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}profiles/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  dispatch(loadProfilesAction(data));
};

export const getUpdateProfileThunk = (id, profile) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.patch(
    `${process.env.REACT_APP_API_URL}profiles/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: profile,
    }
  );

  dispatch(updateProfileAction(data));
};
