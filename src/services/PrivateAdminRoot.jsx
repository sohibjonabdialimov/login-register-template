import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateAdminRoot = () => {
  let auth = localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateAdminRoot;