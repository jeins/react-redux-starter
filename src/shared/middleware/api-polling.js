import heavenAPIPollingMiddleware from './heavenAPIPolling';

export const HEAVEN_API_POLLING = 'HEAVEN_API_POLLING';

export default heavenAPIPollingMiddleware({

  actionKey: HEAVEN_API_POLLING,

  async apiRoot() {
    return '/';
  },

});
