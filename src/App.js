import React from 'react';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// components
import Layout from 'shared/components/Layout';
import Routes from 'shared/routing';

// TODO: check auth and getting scope (user / admin)
// parse to props
const App = ({
  store,
  currentUserData,
}) => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Layout currentUserData={currentUserData}>
        <Routes currentUserData={currentUserData} />
      </Layout>
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
