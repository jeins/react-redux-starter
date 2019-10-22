import React from 'react';
import PropTypes from 'prop-types';

import { USAGE_EMPLOYEE, USAGE_COMPANY } from 'shared/constants/usageContexts';

import CompanyPageRouter from './CompanyPageRouter';
import EmployeePageRouter from './EmployeePageRouter';

const CommonRouting = () => {
  const scope = USAGE_COMPANY;

  if (scope === USAGE_COMPANY) return CompanyPageRouter();

  if (scope === USAGE_EMPLOYEE) return EmployeePageRouter(null);

  return null;
}

export default CommonRouting;