import { cloneDeep } from 'lodash';
import {
  generateEmptyErrors,
  handleApiErrors,
} from 'shared/utils/reducers/errorsHelpers';
import {
  SINGLE_CREATE,
  SINGLE_CREATE_SUCCESS,
  SINGLE_CREATE_FAILURE,

  SINGLE_FETCH,
  SINGLE_FETCH_SUCCESS,
  SINGLE_FETCH_FAILURE,
} from 'Auth/state/actions/users/types';
import { ROOT, SINGLE as IDENTIFIER } from './constants';

export const generateEntryData = () => ({
  fetching: false,
  data: {},
  errors: generateEmptyErrors(),
});

export const INITIAL_STATE = {
  [IDENTIFIER]: {},
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
  [SINGLE_FETCH]: (state, action) => {
    const { id: entityId } = action.params;
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

  [SINGLE_FETCH_SUCCESS]: (state, action) => {
    const { id: entityId } = action.params;
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

  [SINGLE_FETCH_FAILURE]: (state, action) => {
    const { id: entityId } = action.params;
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
};
