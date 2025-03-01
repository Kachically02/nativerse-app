import React from "react";
import useAuth from "../Hook/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { auth } = useAuth();

  if (auth === null) return;

  if (Object.keys(auth).length === 0) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
