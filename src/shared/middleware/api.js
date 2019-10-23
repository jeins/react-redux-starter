import { heavenAPI } from './heavenAPI';
import { loadDeploymentConfiguration } from '../config/deployment';

export const HEAVEN_API = Symbol('HEAVEN_API');

export default heavenAPI({

  actionKey: HEAVEN_API,

  async apiRoot() {
    const { API_ROOT } = await loadDeploymentConfiguration();
    return API_ROOT;
  },

});
