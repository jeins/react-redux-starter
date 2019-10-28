import { cloneDeep } from 'lodash';
import { getCurrentUser } from 'shared/middleware/webStorage/helpers';
import {
  generateEmptyErrors,
  handleApiErrors,
} from 'shared/utils/reducers/errorsHelpers';
import {
  SINGLE_CREATE,
  SINGLE_CREATE_SUCCESS,
  SINGLE_CREATE_FAILURE,

  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  PERFORM_LOGOUT,
} from 'Auth/state/actions/users/types';
import { ROOT, SINGLE as IDENTIFIER } from './constants';

export const generateEntryData = () => ({
  fetching: false,
  data: getCurrentUser() || {},
  errors: generateEmptyErrors(),
});

export const INITIAL_STATE = {
  [IDENTIFIER]: generateEntryData(),
};

export const HANDLERS = {
  // Creation:
  [SINGLE_CREATE]: (state, action) => {
    const { componentId: entityId } = action.params;
    const theState = state[ROOT][IDENTIFIER];

    if (!theState[entityId]) {
      theState[entityId] = generateEntryData();
    }

    const theEntity = cloneDeep(theState[entityId]);
    theEntity.fetching = true;
    theEntity.errors = generateEmptyErrors();

    return {
      ...state,
      [ROOT]: {
        ...state[ROOT],
        [IDENTIFIER]: {
          ...theState,
          [entityId]: theEntity,
        },
      },
    };
  },

  [SINGLE_CREATE_SUCCESS]: (state, action) => {
    const { componentId: entityId } = action.params;
    const theState = state[ROOT][IDENTIFIER];
    const responseData = action.payload.body.data;

    if (!theState[entityId]) {
      theState[entityId] = generateEntryData();
    }

    const theEntity = cloneDeep(theState[entityId]);
    theEntity.fetching = false;
    theEntity.data = responseData;

    return {
      ...state,
      [ROOT]: {
        ...state[ROOT],
        [IDENTIFIER]: {
          ...theState,
          [entityId]: theEntity,
        },
      },
    };
  },

  [SINGLE_CREATE_FAILURE]: (state, action) => {
    const { componentId: entityId } = action.params;
    const theState = state[ROOT][IDENTIFIER];

    if (!theState[entityId]) {
      theState[entityId] = generateEntryData();
    }

    const theEntity = cloneDeep(theState[entityId]);
    theEntity.fetching = false;
    theEntity.errors = handleApiErrors(action.payload);

    return {
      ...state,
      [ROOT]: {
        ...state[ROOT],
        [IDENTIFIER]: {
          ...theState,
          [entityId]: theEntity,
        },
      },
    };
  },

  // Fetching:
  [LOGIN]: (state, action) => {
    let theState = state[ROOT][IDENTIFIER];

    if (!theState) {
      theState = generateEntryData();
    }

    theState.fetching = true;
    theState.errors = generateEmptyErrors();

    return {
      ...state,
      [ROOT]: {
        ...state[ROOT],
        [IDENTIFIER]: {
          ...theState,
        },
      },
    };
  },

  [LOGIN_SUCCESS]: (state, action) => {
    let theState = state[ROOT][IDENTIFIER];
    const responseData = action.payload.body.data;

    if (!theState) {
      theState = generateEntryData();
    }

    theState.fetching = false;
    theState.data = responseData;

    return {
      ...state,
      [ROOT]: {
        ...state[ROOT],
        [IDENTIFIER]: {
          ...theState,
        },
      },
    };
  },

  [LOGIN_FAILURE]: (state, action) => {
    let theState = state[ROOT][IDENTIFIER];

    if (!theState) {
      theState = generateEntryData();
    }

    theState.fetching = false;
    theState.errors = handleApiErrors(action.payload);

    return {
      ...state,
      [ROOT]: {
        ...state[ROOT],
        [IDENTIFIER]: {
          ...theState,
        },
      },
    };
  },

  [PERFORM_LOGOUT]: (state, action) => {
    let theState = state[ROOT][IDENTIFIER];

    if (!theState) {
      theState = generateEntryData();
    }

    theState.data = {};

    return {
      ...state,
      [ROOT]: {
        ...state[ROOT],
        [IDENTIFIER]: {
          ...theState,
        },
      },
    };
  },
};
