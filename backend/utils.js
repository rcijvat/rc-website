/**
 * Created by rcijvat on 12/12/16.
 */

'use strict';

var logger = require('./logger');

module.exports = {
  notFound: function(res) {
    res.status(404).send('Not found');
  },
  inputError: function(res, msg) {
    res.status(400).send(msg);
  },
  serverError: function(res, e) {
    logger.error(e);
    if (e.stack) {
      logger.error(e.stack);
    }
    res.status(500).send('Internal server error');
  }
};
