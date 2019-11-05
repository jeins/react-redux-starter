import React from 'react';
import { Route } from 'react-router-dom';

// Components
import EmployeeDashboard from 'Dashboard/containers/EmployeeDashboard';
import CompanyDashboard from 'Dashboard/containers/CompanyDashboard';

import {
  COMPANY_ROOT_PATH,
  COMPANY_DASHBOARD_EMPLOYEES,
  EMPLOYEE_ROOT_PATH,
} from './constants';

export const SettingsRoutes = () => {};

export const CompanyRoutes = () => (
  <>
    <Route exact path={COMPANY_ROOT_PATH} component={CompanyDashboard} />
    <Route exact path={COMPANY_DASHBOARD_EMPLOYEES} component={() => (<h1>Hello</h1>)} />
  </>
);

export const EmployeeRoutes = () => (
  <Route path={EMPLOYEE_ROOT_PATH} component={EmployeeDashboard} />
);
