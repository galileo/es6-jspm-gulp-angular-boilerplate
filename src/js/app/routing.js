import modules from './modules.js';

export function routing ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app.home', {
    title: 'Home Page',
    url: '/homepage',
    views: {
      'title@': {
        template: 'Home page'
      },
      'content@': modules.home.states.homepage
    }
  });

  $urlRouterProvider.otherwise('/homepage');
}
