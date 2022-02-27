import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const validate = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000000);
    });

  useEffect(
    () =>
      (async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          setAuthenticated(false);
          setLoading(false);
          return;
        }
        const valid = await validate();
        setAuthenticated(valid);
        setLoading(false);
      })(),
    [dispatch]
  );

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={"register placeholder"} />

          {authenticated && <Route path="/home" element={"home placeholder"} />}
          <Route path="/users/:id" element={"userDetails placeholder"} />
          {authenticated ? (
            <Route path="*" element={<NotFoundPage />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      )}
    </>
  );
}

export default App;
