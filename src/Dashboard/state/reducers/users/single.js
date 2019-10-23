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

  SINGLE_UPDATE,
  SINGLE_UPDATE_SUCCESS,
  SINGLE_UPDATE_FAILURE,

  SINGLE_DELETE,
  SINGLE_DELETE_SUCCESS,
  SINGLE_DELETE_FAILURE,
} from 'Dashboard/state/actions/users/types';
import { ROOT, SINGLE as IDENTIFIER } from './constants';

export const generateEntryData = () => ({
  isDeleted: false,
  isUpdated: false,
  isCreated: false,
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

    if (!theState[entityId]) {
      theState[entityId] = generateEntryData();
    }

    const theEntity = cloneDeep(theState[entityId]);
    theEntity.fetching = false;
    theEntity.isCreated = true;

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
    theEntity.isCreated = false;
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
    const responseData = action.payload.body.data[0];

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

  // Updating:
  [SINGLE_UPDATE]: (state, action) => {
    const { expenseId: entityId } = action.params;
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

  [SINGLE_UPDATE_SUCCESS]: (state, action) => {
    const { expenseId: entityId } = action.params;
    const theState = state[ROOT][IDENTIFIER];

    if (!theState[entityId]) {
      theState[entityId] = generateEntryData();
    }

    const theEntity = cloneDeep(theState[entityId]);

    theEntity.fetching = false;
    theEntity.isUpdated = true;

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

  [SINGLE_UPDATE_FAILURE]: (state, action) => {
    const { expenseId: entityId } = action.params;
    const theState = state[ROOT][IDENTIFIER];

    if (!theState[entityId]) {
      theState[entityId] = generateEntryData();
    }

    const theEntity = cloneDeep(theState[entityId]);

    theEntity.fetching = false;
    theEntity.isUpdated = false;
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

  // Deleting:
  [SINGLE_DELETE]: (state, action) => {
    const { expenseId: entityId } = action.params;
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

  [SINGLE_DELETE_SUCCESS]: (state, action) => {
    const { expenseId: entityId } = action.params;
    const theState = state[ROOT][IDENTIFIER];

    if (!theState[entityId]) {
      theState[entityId] = generateEntryData();
    }

    const theEntity = cloneDeep(theState[entityId]);

    theEntity.fetching = false;
    theEntity.isDeleted = true;

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

  [SINGLE_DELETE_FAILURE]: (state, action) => {
    const { expenseId: entityId } = action.params;
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
