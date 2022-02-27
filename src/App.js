import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import userContext from "./contexts/userContext";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  const { authenticated } = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {authenticated ? (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/users/:id" element={"userDetails placeholder"} />
          <Route path="*" element={<NotFoundPage />} />
        </>
      ) : (
        <Route path="*" element={<LoginPage />} />
      )}
    </Routes>
  );
}

export default App;
