import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} path="/" exact />
        </Route>

        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
