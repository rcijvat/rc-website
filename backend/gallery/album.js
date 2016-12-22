/**
 * Created by rcijvat on 12/13/16.
 */

'use strict';

var path = require('path');

var _ = require('lodash');

var galleryUtils = require('./gallery-utils');
var Image = require('./Image');

var __allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

function Album(root, webpath, name) {
  var self = this;

  // private vars
  var _root = root;
  var _webpath = webpath;
  var _webImagesPromise = null;

  // public vars
  self.name = name;


  // Start async initialization
  _webImagesPromise = galleryUtils.getFilesWithExtension(_root, __allowedExtensions).then(function(fileNames) {
    return _.map(fileNames, function(fileName) {
      return new Image(self, fileName);
    });
  });




  //public functions
  self.getRoot = function() {
    return _root;
  };

  self.getWebPath = function() {
    return _webpath;
  };

  self.toJson = function() {
    return _webImagesPromise.then(function(images) {
      return _.map(images, function(image) { return image.toJson(); });
    }).then(function(imagesJson) {
      return {
        name: self.name,
        images: imagesJson
      };
    });
  }
}

module.exports = Album;
