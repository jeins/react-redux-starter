import createPollingAPIMiddleware from './helpers/pollingConnection';

export const HEAVEN_API_POLLING = 'HEAVEN_API_POLLING';

export default createPollingAPIMiddleware({
  actionKey: HEAVEN_API_POLLING,

  async apiRoot() {
    return '/';
  },
});
