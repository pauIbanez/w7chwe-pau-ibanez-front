import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const loginUser = async (formData, cb) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}users/login`,
        {
          ...formData,
        }
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.id);
      setAuthenticated(true);
      navigate("/home");
    } catch (error) {
      setAuthenticated(false);
      localStorage.removeItem("token");
      cb();
    }
  };

  const registerUser = async (formData, cb) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}users/register`,
        formData,
        config
      );
      cb(true);
    } catch (error) {
      cb(false, error.response.data.error);
    }
  };

  const updateUser = async (update, cb) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}profiles/update`,
        update,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}profiles/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(data);
    } catch (error) {
      cb();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  useEffect(
    () =>
      (async () => {
        if (authenticated) {
          const id = localStorage.getItem("id");
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
            setUser(data);
          } catch (error) {
            localStorage.removeItem("id");
            localStorage.removeItem("token");
            navigate("/login");
          }
        }
      })(),
    [authenticated, navigate]
  );
  const contextValue = {
    authenticated,
    loginUser,
    registerUser,
    user,
    updateUser,
  };

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};

export default UserContextProvider;
