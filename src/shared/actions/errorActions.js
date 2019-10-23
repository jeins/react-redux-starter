import { uniqueId } from 'lodash';

export const DISMISS_ERROR = 'DISMISS_ERROR';
export const CREATE_ERROR = 'CREATE_ERROR';

export function dismissError(errorID) {
  return {
    type: DISMISS_ERROR,
    payload: {
      errorID,
    },
  };
}

export function createError(message) {
  return {
    type: CREATE_ERROR,
    payload: {
      id: uniqueId('error_'),
      message,
      occurrenceTimestamp: new Date().getTime(),
    },
  };
}
