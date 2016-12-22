/**
 * Created by rcijvat on 12/20/16.
 */

var _ = require('lodash');

module.exports = {};

_.each(['error', 'info', 'warn', 'debug'], function(type) {
  module.exports[type] = function(err) {
    if (!_.isEmpty(err)) {
      log(type, err.toString());
    } else {
      log(type, err);
    }
  };
});

function log(type, txt) {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  console[type]((h > 9 ? h : '0' + h) + ':' + (m > 9 ? m : '0' + m) + ' ' + type.toUpperCase() + ' ' + txt);
}
