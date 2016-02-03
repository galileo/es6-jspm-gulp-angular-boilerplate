export function routing ($stateProvider) {
  $stateProvider.state('app', {
    title: '- No state',
    abstract: true,
    views: {
      'navbar@': {
        templateUrl: 'html/layout/navbar.html',
        controller: function ($rootScope, $scope) {
          $scope.user = {
            full_name: 'User FullName'
          };
        }
      },
      'sidebar@': {
        templateUrl: 'html/layout/sidebar.html'
      }
    }
  });
}
