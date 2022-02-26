import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={"login placeholder"} />
      <Route path="/register" element={"register placeholder"} />
      <Route path="/home" element={"home placeholder"} />
      <Route path="/users/:id" element={"userDetails placeholder"} />
      <Route path="*" element={"notFound placeholder"} />
    </Routes>
  );
}

export default App;
