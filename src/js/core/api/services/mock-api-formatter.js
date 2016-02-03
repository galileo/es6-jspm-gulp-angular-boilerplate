export default function () {
  let format = function (apiPath) {
    return '/api/mock/' + apiPath + '.json';
  };

  return {
    format: format
  };
};
