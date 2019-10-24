import React from 'react';
import { Route } from 'react-router-dom';

// Components
import LoginContainer from 'Auth/containers/LoginContainer';
import RegisterContainer from 'Auth/containers/RegisterContainer';

import {
  LOGIN_ROOT_PATH,
  REGISTER_ROOT_PATH,
} from './constants';

export const routes = () => (
  <>
    <Route path={LOGIN_ROOT_PATH} exact component={LoginContainer} />
    <Route path={REGISTER_ROOT_PATH} component={RegisterContainer} />
  </>
);
