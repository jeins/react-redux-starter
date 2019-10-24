import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import reducers from 'shared/reducers';
import middlewares from 'shared/middleware';
import App from './App';

const ROOT_NODE = document.getElementById('app');

async function init() {
  const appReducers = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  const appStore = createStore(
    appReducers,
    compose(
      applyMiddleware(routerMiddleware(createBrowserHistory()), ...middlewares),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    ),
  );

  ReactDOM.render((
    <App
      store={appStore}
      currentUserData={{
        scope: 'COMPANY', // TODO call parse value from auth service
      }} />
  ), ROOT_NODE);
}

$(document).ready(init);

export default init;
