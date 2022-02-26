import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const validate = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
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
        <h1>LOADING</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/login" element={"login placeholder"} />
          <Route path="/register" element={"register placeholder"} />

          {authenticated && <Route path="/home" element={"home placeholder"} />}
          <Route path="/users/:id" element={"userDetails placeholder"} />
          {authenticated ? (
            <Route path="*" element={"notFound placeholder"} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      )}
    </>
  );
}

export default App;
