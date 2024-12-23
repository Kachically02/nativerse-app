import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/userAuth";

const RequireAuth = ({ igg }) => {
  const { auth } = useAuth();
  console.log({auth})
  const location = useLocation();

  if (auth === null) return <div/>

  return auth?.users?.igg === igg ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location.pathname }} replace />
  );

};

export default RequireAuth;
