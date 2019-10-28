import { TOKEN_KEY } from 'shared/middleware/constants';
import {
  LOGIN_SUCCESS,
  PERFORM_LOGOUT,
} from 'Auth/state/actions/users/types';
import {
  setAuthToken,
  setCurrentUser,
  clearAll,
} from './helpers';

export default () => (next) => (action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      setAuthToken(payload.headers.get(TOKEN_KEY));
      setCurrentUser(payload.body.data);
      break;

    case PERFORM_LOGOUT:
      clearAll();
      break;

    default: break;
  }

  next(action);
};
