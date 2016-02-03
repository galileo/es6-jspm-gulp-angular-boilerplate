import angular from 'angular';

import {layout} from './directive/layout.js';
import title from './directive/title.js';

let layoutModule = angular.module('core.layout', []);

layoutModule.directive('coreLayout', layout);
layoutModule.directive('coreTitle', title);

export default layoutModule;
