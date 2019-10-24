import React from 'react';
import { Route } from 'react-router-dom';

// Components
import EmployeeDashboard from 'Dashboard/containers/EmployeeDashboard';
import CompanyDashboard from 'Dashboard/containers/CompanyDashboard';

import {
  COMPANY_ROOT_PATH,
  EMPLOYEE_ROOT_PATH,
} from './constants';

export const SettingsRoutes = () => {};

export const CompanyRoutes = () => (
  <Route path={COMPANY_ROOT_PATH} component={CompanyDashboard} />
);

export const EmployeeRoutes = () => (
  <Route path={EMPLOYEE_ROOT_PATH} component={EmployeeDashboard} />
);
