import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { EmployeeRoutes as DashboardEmployeeRoutes } from 'Dashboard/routes';

const EmployeePageRouter = (contextProps = {}) => (
  <Router>
    <Switch>
      <DashboardEmployeeRoutes />
    </Switch>
  </Router>
);

export default EmployeePageRouter;
