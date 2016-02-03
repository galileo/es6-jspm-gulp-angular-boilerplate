import angular from 'angular';
import testApiFormatter from './services/mock-api-formatter.js';

export default angular.module('core.api', [])
  .factory('MockApiFormatter', testApiFormatter);
