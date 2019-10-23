import heavenAPIMiddleware from './heavenAPI';

export const HEAVEN_API = Symbol('HEAVEN_API');

export default heavenAPIMiddleware({
  actionKey: HEAVEN_API,

  async apiRoot() {
    return '/';
  },
});
