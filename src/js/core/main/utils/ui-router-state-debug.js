import {log} from './ui-router-log.js';
import listener from './ui-router-listener.js';

export default function ($log, $rootScope, CORE_CONFIG) {
  var uiRouterConfig = CORE_CONFIG.debug['ui-router'];
  log.logger = $log;

  if (CORE_CONFIG.debug.standard === false || uiRouterConfig === false) {
    return;
  }

  uiRouterConfig = uiRouterConfig === true ? {} : uiRouterConfig;
  uiRouterConfig.type = uiRouterConfig.type || 'all';

  if (uiRouterConfig === false) {
    log.info('You can enable ui-router state debug in config.json file debug.ui-router: { type: all, verbose, errors } ');

    return;
  }

  log.info('You can disable ui-router state debug in config.json file debug.ui-router: false');

  switch (uiRouterConfig.type) {
    case 'error':
      listener.listenErrors($rootScope, log);
      break;
    case 'all':
      listener.listenAll($rootScope, log);
      listener.listenErrors($rootScope, log);
      break;
    case 'verbose':
      listener.listenAll($rootScope, log);
      listener.listenErrors($rootScope, log);
      listener.listenVerbose($rootScope, log);
      break;
    default:
      $log.warn('We don\' support debug \'' + uiRouterConfig.type + '\'');
  }
}
