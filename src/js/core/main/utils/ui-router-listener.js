var listener = {
  listenAll: function ($scope, log) {
    log.info('listen to all');

    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      log.transition('start', fromState, toState, toParams);
    });

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      log.transition('success', fromState, toState, toParams);
    });

    $scope.$on('$viewContentLoading', function (event, viewConfig) {
      log.info(viewConfig + ' loading');
    });

    $scope.$on('$viewContentLoaded', function (event, viewConfig) {
      log.info(viewConfig + ' loaded');
    });
  },
  listenErrors: function (scope, log) {
    log.info('listen to errors');

    scope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      log.error(toState.name);
      log.error(error);
    });

    scope.$on('$stateNotFound', function (event, unfoundState) {
      log.error(unfoundState.name);
    });
  },
  listenVerbose: function (scope, log) {
    log.info('listen to verbose');

    scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      log.warn('$stateChangeStart',
        'toState', toState,
        'toParams', toParams,
        'fromState', fromState,
        'fromParams', fromParams,
        'event', event
      );
    });

    scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      log.warn('$stateChangeSuccess',
        'toState', toState,
        'toParams', toParams,
        'fromState', fromState,
        'fromParams', fromParams,
        'event', event
      );
    });

    scope.$on('$viewContentLoading', function (event, viewConfig) {
      log.warn('$viewContentLoading',
        'viewConfig', viewConfig,
        'event', event
      );
    });

    scope.$on('$viewContentLoaded', function (event, viewConfig) {
      log.warn('$viewContentLoaded',
        'viewConfig', viewConfig,
        'event', event
      );
    });

    scope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
      log.warn('$stateNotFound',
        'unfoundState', unfoundState,
        'fromState', fromState,
        'fromParams', fromParams,
        'event', event
      );
    });
  }
};

export default listener;


