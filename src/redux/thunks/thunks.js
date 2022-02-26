import axios from "axios";
import { loadProfilesAction } from "../actions/actionCreators";

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
