export default function ($http, $log, MockApiFormatter) {
  var baseUrl = 'home/';

  return {
    home: function () {
      return $http.get(MockApiFormatter.format(baseUrl + 'get')).then(function (res) {
        return res.data;
      }, function (res) {
        $log.warn(res, 'Call to home page not successful');
      });
    }
  };
}
