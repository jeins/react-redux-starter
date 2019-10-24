import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { Switch, Redirect, Route } from 'react-router-dom';
import { USAGE_EMPLOYEE, USAGE_COMPANY } from 'shared/constants/usageContexts';
import { COMPANY_ROOT_PATH, EMPLOYEE_ROOT_PATH } from 'Dashboard/routes/constants';

import { routes as AuthRoutes } from 'Auth/routes';
import CompanyPageRouter from './CompanyPageRouter';
import EmployeePageRouter from './EmployeePageRouter';

const routes = ({
  currentUserData,
}) => {
  const scope = isEmpty(currentUserData) ? null : currentUserData.scope;

  const redirectRoute = () => {
    if (scope === USAGE_COMPANY) {
      return <Redirect to={COMPANY_ROOT_PATH} />;
    }

    if (scope === USAGE_EMPLOYEE) {
      return <Redirect to={EMPLOYEE_ROOT_PATH} />;
    }

    return <Redirect to="/" />;
  };

  return (
    <Switch>
      <Route path="/">
        <AuthRoutes />
        { scope === USAGE_COMPANY && (<CompanyPageRouter />) }
        { scope === USAGE_EMPLOYEE && (<EmployeePageRouter />) }

        {redirectRoute()}
      </Route>
    </Switch>
  );
};

routes.propTypes = {
  currentUserData: PropTypes.shape().isRequired,
};

export default routes;
