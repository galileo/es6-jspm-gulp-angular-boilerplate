export default function ($rootScope, $timeout) {
  return {
    scope: {
      titlePrefix: '@',
      titleSeparator: '@'
    },
    link: function (scope, element) {
      scope.titlePrefix = scope.titlePrefix || 'Default Title';
      scope.titleSeparator = scope.titleSeparator || ' - ';

      var listener = function (event, toState) {
        var title = scope.titlePrefix;
        if (toState.title) {
          title = title + scope.titleSeparator + toState.title;
        }

        $timeout(function () {
          element.text(title);
        }, 0, false);
      };

      $rootScope.$on('$stateChangeSuccess', listener);
    }
  };
}
