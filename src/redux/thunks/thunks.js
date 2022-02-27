import axios from "axios";
import {
  loadProfilesAction,
  updateProfileAction,
} from "../actions/actionCreators";

export const loadProfilesThunk = async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}profiles/list`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("dispatched");
    dispatch(loadProfilesAction(data.profiles));
  } catch (error) {
    log(error);
  }
};

export const getLoadProfileThunk = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}profiles/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(updateProfileAction(data));
  } catch (error) {
    log(error);
  }
};

export const getUpdateProfileThunk = (id, profile) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_API_URL}profiles/update/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { ...profile },
      }
    );

    dispatch(updateProfileAction(data));
  } catch (error) {
    log(error);
  }
};

const logger = [];

const log = (error) => {
  logger.push(error);
};
