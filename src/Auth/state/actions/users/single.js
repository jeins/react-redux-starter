import { HEAVEN_API } from 'shared/middleware/api';
import { METHOD_POST } from 'shared/constants/httpMethod';
import {
  SINGLE_CREATE,
  SINGLE_CREATE_SUCCESS,
  SINGLE_CREATE_FAILURE,

  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  PERFORM_LOGOUT,
} from './types';

export const register = ({
  componentId,
  data,
} = {}) => ({
  [HEAVEN_API]: {
    types: [
      SINGLE_CREATE,
      SINGLE_CREATE_SUCCESS,
      SINGLE_CREATE_FAILURE,
    ],
    endpoint: 'api/register',
    method: METHOD_POST,
    params: { ...data },
    actionParams: { componentId },
  },
});

export const login = ({ componentId, email, password }) => ({
  [HEAVEN_API]: {
    types: [
      LOGIN,
      LOGIN_SUCCESS,
      LOGIN_FAILURE,
    ],
    endpoint: 'api/authorization/authenticate',
    method: METHOD_POST,
    params: { email, password },
    actionParams: {},
  },
});

export const logout = () => ({ type: PERFORM_LOGOUT });
