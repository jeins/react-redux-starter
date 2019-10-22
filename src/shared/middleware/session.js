import {LOGIN_SUCCESS, PERFORM_LOGOUT} from '../actions/authActions';
import {setAuthToken, setCurrentUser, clearAuthToken, clearCurrentUser} from '../sessionStorage';

export default () => next => action => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    const token = action.payload.headers.get('X-Heaven-Token');
    setAuthToken(token);
    setCurrentUser(action.payload.body.username);
    break;

  case PERFORM_LOGOUT:
    clearAuthToken();
    clearCurrentUser();
    break;
  }

  next(action);
};
