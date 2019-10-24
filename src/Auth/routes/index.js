import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import LoginContainer from 'Auth/containers/LoginContainer';
import RegisterContainer from 'Auth/containers/RegisterContainer';

export const routes = () => (
  <Switch>
    <Route path="/" exact component={LoginContainer} />
    <Route path="/register" component={RegisterContainer} />
  </Switch>
);
