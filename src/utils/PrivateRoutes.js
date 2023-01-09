import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AppContext from "../context/AppContext";
const PrivateRoutes = () => {
  const { token } = useContext(AppContext);
  let auth = { token: token };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
