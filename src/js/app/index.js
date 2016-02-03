import angular from 'angular';
import 'angular-ui-router';

import modules from './modules.js';

import {routing} from './routing.js';

let appModule = angular.module('app', [
  // application dependencies
  'app.home'
]);

appModule.constant('APP_MODULES', modules);

appModule.config(routing);

export default appModule;
