import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { CompanyRoutes as DashboardCompanyRoutes } from 'Dashboard/routes';

const CompanyPageRouter = () => (
  <Router>
    <Switch>
      <DashboardCompanyRoutes />
    </Switch>
  </Router>
);

export default CompanyPageRouter;
