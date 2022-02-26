import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/login" element={"login placeholder"} />
      <Route path="/register" element={"register placeholder"} />

      {token && <Route path="/home" element={"home placeholder"} />}
      <Route path="/users/:id" element={"userDetails placeholder"} />
      {token ? (
        <Route path="*" element={"notFound placeholder"} />
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App;
