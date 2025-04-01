import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = ({ component }) => {
  const auth = window.localStorage.getItem('accessToken') ? true : false;

  console.log(component);
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default AuthGuard;
