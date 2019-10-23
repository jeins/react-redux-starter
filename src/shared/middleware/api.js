import createAPIMiddleware from './helpers/singleConnection';

export const HEAVEN_API = 'HEAVEN_API';

export default createAPIMiddleware({
  actionKey: HEAVEN_API,

  async apiRoot() {
    return '/';
  },
});
