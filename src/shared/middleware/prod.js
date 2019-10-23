import multi from 'redux-multi';
import thunk from 'redux-thunk';
import api from './api';
import apiPolling from './api-polling';
import redirect from './redirect';

export default [
  api,
  apiPolling,
  thunk,
  multi,
  redirect,
];
