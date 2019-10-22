import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { reducers } from 'shared/reducers';
import CommonRouting from 'shared/routing/CommonRouting';

const ROOT_NODE = document.getElementById('app');

async function init() {
  const appReducers = combineReducers({
    ...reducers,
    routing: routerReducer,
  });
  
  const appStore = createStore(
    appReducers,
    compose(
      applyMiddleware(routerMiddleware(browserHistory), thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );

  ReactDOM.render((
    <Provider store={appStore}>
      {CommonRouting()}
    </Provider>
  ), ROOT_NODE);
}

$(document).ready(init);

export default init;
