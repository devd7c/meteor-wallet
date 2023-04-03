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
// eslint-disable-next-line import/no-unresolved
import { AnonymousOnly } from './components/AnonymousOnly';
// eslint-disable-next-line import/no-unresolved
import { LoggedUserOnly } from './components/LoggedUserOnly';
// eslint-disable-next-line import/no-unresolved
import { RemoveTransaction } from './RemoveTransaction';
// eslint-disable-next-line import/no-unresolved
import { AdminOnly } from './components/AdminOnly';

export const Router = () => (
    <Routes>
        <Route path={RoutePaths.HOME} element={<LoggedUserOnly><Home/></LoggedUserOnly>} />
        <Route path={RoutePaths.ACCESS} element={<AnonymousOnly><Access/></AnonymousOnly>} />
        <Route path={RoutePaths.FORGOT_PASSWORD} element={<AnonymousOnly><ForgotPassword/></AnonymousOnly>} />
        <Route path={`${RoutePaths.RESET_PASSWORD}/:token`} element={<AnonymousOnly><ResetPassword/></AnonymousOnly>} />
        <Route path={RoutePaths.REMOVE_TRANSACTION} element={<AdminOnly><RemoveTransaction/></AdminOnly>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
);
