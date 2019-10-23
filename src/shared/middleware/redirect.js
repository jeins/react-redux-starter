import { push } from 'react-router-redux';
import { isString, get } from 'lodash';

export default ({ dispatch }) => (next) => (action) => {
  next(action);

  if (isString(get(action, 'meta.redirect'))) {
    dispatch(push(action.meta.redirect));
  }
};
