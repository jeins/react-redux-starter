import api from './api';
import apiPolling from './api-polling';
import redirect from './redirect';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

export default [
  api,
  apiPolling,
  thunk,
  multi,
  redirect,
];
