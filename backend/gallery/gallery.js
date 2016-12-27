/**
 * Created by rcijvat on 12/10/16.
 */

'use strict';

var path = require('path');
var fs = require('fs');

var express = require('express');
var Q = require('q');
var _ = require('lodash');

var utils = require('../utils');
var galleryUtils = require('./gallery-utils');
var Album = require('./album');


var webRoot = '/gallery-img/';
var galleryPath = path.join(__dirname, 'gallery');
var albums = galleryUtils.getDirectories(galleryPath).then(function(dirNames) {
  return _.map(dirNames, function(dirName) {
    return new Album(path.join(galleryPath, dirName), path.join(webRoot, dirName), dirName);
  });
});

function register(app) {
  app.use(webRoot, express.static(path.join(__dirname, 'gallery')));

  app.get('/gallery/albums', function(req, res) {
    albums.then(function(albums) {
      return _.map(albums, function (album) {
        return album.toJson();
      });
    }).then(function(albumJsonPromises) {
      return Q.all(albumJsonPromises);
    }).then(function(albumsJson) {
      res.send(albumsJson);
    }).catch(function(e) {
      utils.serverError(res, e);
    }).done();
  });
}


module.exports = {
  register: register
};
