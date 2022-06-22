import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';

const HomePage = lazy(() => import('./modules/home/pages/HomePage'));
const ContactPage = lazy(() => import('./modules/home/pages/ContactPage'));
const LoginPage = lazy(() => import('./modules/auth/pages/LoginPage'));
const LoginPage2 = lazy(() => import('./modules/auth/login2/Page/LoginPage2'));
const RegisterPage = lazy(() => import('./modules/auth/Register/page/RegisterPage'));
const InfoPage = lazy(() => import('./modules/profile/pages/InfoPage'));
const Payroll = lazy(() => import('./modules/payroll/pages'));

const UploadPage = lazy(() => import('modules/Upload'));

interface Props {}

export const Routes = (props: Props) => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Switch location={location}>
        <Route path={ROUTES.login} component={LoginPage} />
        <ProtectedRoute path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.contact} component={ContactPage} />
        <Route path={ROUTES.login2} component={LoginPage2} />
        <Route path={ROUTES.register} component={RegisterPage} />
        <Route path={ROUTES.info} component={InfoPage} />
        <Route path={ROUTES.payroll} component={Payroll} />
        <Route path={ROUTES.upload} component={UploadPage} />

        <Route path="/" component={LoginPage} />
      </Switch>
    </Suspense>
  );
};
