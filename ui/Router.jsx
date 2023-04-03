import React from 'react';

import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Home } from './Home';
// eslint-disable-next-line import/no-unresolved
import { NotFound } from './NotFound';
// eslint-disable-next-line import/no-unresolved
import { Access } from './Access';
// eslint-disable-next-line import/no-unresolved
import { RoutePaths } from './RoutePaths';
// eslint-disable-next-line import/no-unresolved
import { ForgotPassword } from './ForgotPassword';
// eslint-disable-next-line import/no-unresolved
import { ResetPassword } from './resetPassword';

export const Router = () => (
    <Routes>
        <Route path={RoutePaths.HOME} element={<Home/>} />
        <Route path={RoutePaths.ACCESS} element={<Access/>} />
        <Route path={RoutePaths.FORGOT_PASSWORD} element={<ForgotPassword/>} />
        <Route path={`${RoutePaths.RESET_PASSWORD}/:token`} element={<ResetPassword/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
);
