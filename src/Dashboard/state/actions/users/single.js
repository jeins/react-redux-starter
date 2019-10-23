import { HEAVEN_API } from 'shared/middleware/api';
import {
  METHOD_POST,
  METHOD_GET,
  METHOD_PUT,
  METHOD_DELETE,
} from 'shared/constants/httpMethod';
import {
  SINGLE_CREATE,
  SINGLE_CREATE_SUCCESS,
  SINGLE_CREATE_FAILURE,

  SINGLE_FETCH,
  SINGLE_FETCH_SUCCESS,
  SINGLE_FETCH_FAILURE,

  SINGLE_UPDATE,
  SINGLE_UPDATE_SUCCESS,
  SINGLE_UPDATE_FAILURE,

  SINGLE_DELETE,
  SINGLE_DELETE_SUCCESS,
  SINGLE_DELETE_FAILURE,
} from './types';

export const create = ({
  componentId,
  data,
} = {}) => ({
  [HEAVEN_API]: {
    types: [
      SINGLE_CREATE,
      SINGLE_CREATE_SUCCESS,
      SINGLE_CREATE_FAILURE,
    ],
    endpoint: 'api/v1/users',
    method: METHOD_POST,
    params: { ...data },
    actionParams: { componentId },
  },
});

export const fetch = ({ userId }) => ({
  [HEAVEN_API]: {
    types: [
      SINGLE_FETCH,
      SINGLE_FETCH_SUCCESS,
      SINGLE_FETCH_FAILURE,
    ],
    endpoint: `api/v1/users/${userId}`,
    method: METHOD_GET,
    actionParams: { id: userId },
  },
});

export const update = ({
  userId,
  data,
} = {}) => ({
  [HEAVEN_API]: {
    types: [
      SINGLE_UPDATE,
      SINGLE_UPDATE_SUCCESS,
      SINGLE_UPDATE_FAILURE,
    ],
    endpoint: `api/v1/users/${userId}`,
    method: METHOD_PUT,
    params: { userId, ...data },
    actionParams: { id: userId },
  },
});

export const remove = ({ userId }) => ({
  [HEAVEN_API]: {
    types: [
      SINGLE_DELETE,
      SINGLE_DELETE_SUCCESS,
      SINGLE_DELETE_FAILURE,
    ],
    endpoint: `api/v1/users/${userId}`,
    method: METHOD_DELETE,
    actionParams: { id: userId },
  },
});
