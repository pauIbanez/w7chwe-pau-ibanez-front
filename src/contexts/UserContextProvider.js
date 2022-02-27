import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);

  const loginUser = async (formData, cb) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}users/login`,
        {
          ...formData,
        }
      );
      localStorage.setItem("token", data.token);
      setAuthenticated(true);
      navigate("/home");
    } catch (error) {
      setAuthenticated(false);
      localStorage.removeItem("token");
      cb();
    }
  };

  const registerUser = async (formData, cb) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}users/register`, {
        headers: { "Content-Type": "multipart/form-data" },
        ...formData,
      });
      cb(true);
    } catch (error) {
      cb(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const contextValue = {
    authenticated,
    loginUser,
    registerUser,
  };

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};

export default UserContextProvider;