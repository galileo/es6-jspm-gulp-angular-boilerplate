import angular from 'angular';
import uiRouterDebug from './utils/ui-router-state-debug.js';

let mainModule = angular.module('core.main', [
  'ui.router'
]);

mainModule.run(uiRouterDebug);

export default mainModule;
