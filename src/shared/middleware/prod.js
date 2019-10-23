import multi from 'redux-multi';
import thunk from 'redux-thunk';
import api from './api';
import apiPolling from './api-polling';

export default [
  api,
  apiPolling,
  thunk,
  multi,
];
