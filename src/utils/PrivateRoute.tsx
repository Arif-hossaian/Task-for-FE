import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  let location = useLocation();
  const userInfoString = sessionStorage.getItem('userInfo');
  const token = userInfoString ? JSON.parse(userInfoString) : null;

  if (token) {
    return <Outlet />;
  }

  return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;
