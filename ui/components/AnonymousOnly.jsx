import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useLoggedUser } from 'meteor/quave:logged-user-react';
// eslint-disable-next-line import/no-unresolved
import { Loading } from './Loading';
// eslint-disable-next-line import/no-unresolved
import { RoutePaths } from '../RoutePaths';

export const AnonymousOnly = ({ children }) => {
  const { loggedUser, isLoadingLoggedUser } = useLoggedUser();
  const location = useLocation();
  if (isLoadingLoggedUser) {
    return <Loading />;
  }

  if (loggedUser) {
    return <Navigate to={RoutePaths.HOME} state={{ from: location }} replace />;
  }

  return children;
};
