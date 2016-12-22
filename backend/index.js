'use strict';

var path = require('path');

var express = require('express');
var _ = require('lodash');

var utils = require('./utils');
var logger = require('./logger');
var gallery = require('./gallery/gallery');

var port = 12000;
var app = express();

console.log(path.join(__dirname, '..', 'dist'));
app.use(express.static(path.join(__dirname, '..', 'dist')));

gallery.register(app);

app.all('*', function(req, res) {
  if (!(/\.\w*$/.test(req.url))) {
    req.url = '/index.html';
    app.handle(req, res);
  } else {
    utils.notFound(res);
  }
});

app.listen(port);
logger.info('App backend listening on port [' + port + ']');
