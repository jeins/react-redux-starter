import React from 'react';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'shared/routing';

// TODO: check auth and getting scope (user / admin)
// parse to props
const App = ({
  store,
  currentUserData,
}) => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Routes currentUserData={currentUserData} />
    </Router>
  </Provider>
);

App.propTypes = {
  currentUserData: PropTypes.shape(),

  store: PropTypes.shape().isRequired,
};

App.defaultProps = {
  currentUserData: null,
};

export default App;
