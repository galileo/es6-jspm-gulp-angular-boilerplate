import angular from 'angular';
import homeRepository from './services/home-repository.js';
import states from './states.js';

let homeModule = angular.module('app.home', [
  'core.api'
]);

homeModule.factory('HomeRepository', homeRepository);
homeModule.states = states;

export default homeModule;
