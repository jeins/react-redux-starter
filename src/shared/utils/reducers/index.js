export default (state, action, actionHandlers) => {
  if (actionHandlers[action.type]) {
    return typeof actionHandlers[action.type] === 'function'
      ? actionHandlers[action.type](state, action)
      : actionHandlers[action.type];
  }
  return state;
};
