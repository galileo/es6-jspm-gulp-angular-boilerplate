var silenceLogger = {
  info: function () {
  },
  error: function () {
  },
  warn: function () {
  }
};

export var log = {
  logger: silenceLogger,
  state: function () {
    return 'state: ';
  },
  error: function (message) {
    this.logger.error(this.state(), message);
  },
  info: function (message) {
    this.logger.info(this.state(), message);
  },
  warn: function () {
    this.logger.warn(arguments);
  },
  transition: function (transitionName, fromState, toState, toParams) {
    this.info(transitionName + fromState.name + ' -> ' + toState.name, toParams);
  }
};
