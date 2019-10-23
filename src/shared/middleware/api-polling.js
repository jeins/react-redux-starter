import { createAPIPollingMiddleware } from '../common';
import { loadDeploymentConfiguration } from '../config/deployment';

export const HEAVEN_API_POLLING = 'HEAVEN_API_POLLING';

export default createAPIPollingMiddleware({

  actionKey: HEAVEN_API_POLLING,

  async apiRoot() {
    const { API_ROOT } = await loadDeploymentConfiguration();
    return API_ROOT;
  },

});
