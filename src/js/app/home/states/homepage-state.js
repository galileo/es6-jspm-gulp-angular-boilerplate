export default {
  templateUrl: 'html/home/homepage.html',
  controller: function ($scope, home) {
    $scope.home = home;
  },
  resolve: {
    'home': function (HomeRepository) {
      return HomeRepository.home();
    }
  }
};
