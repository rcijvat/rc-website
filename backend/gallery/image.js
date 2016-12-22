/**
 * Created by rcijvat on 12/20/16.
 */
'use strict';

var path = require('path');
var fs = require('fs');

var logger = require('../logger');
var galleryUtils = require('./gallery-utils');

var __thumbsDir = 'thumbs';

function Image(album, imageFileName) {
  var self = this;

  var _album = album;

  // File system vars
  var _filePath = path.join(_album.getRoot(), imageFileName);
  var _thumbsDirPath = path.join(_album.getRoot(), __thumbsDir);
  var _thumbPath = path.join(_thumbsDirPath, imageFileName);

  // Web path vars
  var _webPath = path.join(_album.getWebPath(), imageFileName);
  var _thumbsDirWebPath = path.join(_album.getWebPath(), __thumbsDir);
  var _thumbWebPath = path.join(_thumbsDirWebPath, imageFileName);


  galleryUtils.fileExists(_thumbsDirPath).then(function(thumbDirExists) {
    if (!thumbDirExists) {
      return galleryUtils.mkdir(_thumbsDirPath);
    }
  }).then(function() {
    // At this point we know that the thumbs directory exists
    return galleryUtils.fileExists(_thumbPath);
  }).then(function(thumbExists) {
    if (!thumbExists) {
      return galleryUtils.createThumbnail(_filePath, _thumbPath, 300);
    }
  }).catch(function(err) {
    logger.error('Could not generate thumb for ' + _filePath);
    logger.error(err);
  }).done();

  self.toJson = function() {
    return {
      path: _webPath,
      thumb: _thumbWebPath
    };
  }
}

module.exports = Image;

