import angular from 'angular';
import 'angular-ui-router';

import '../app/index.js';
import modules from './modules.js';
import {routing} from './routing.js';

let coreModule = angular.module('core', [
  // External dependencies
  'ui.router',

  // Core modules
  'core.layout',
  'core.api',

  // Internal application
  'app'
]);

coreModule.constant('CORE_MODULES', modules);
coreModule.config(routing);

export function bootApp () {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['core']);
  });
}
