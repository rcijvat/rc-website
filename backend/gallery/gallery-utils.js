/**
 * Created by rcijvat on 12/13/16.
 */

'use strict';

var path = require('path');
var fs = require('fs');

var _ = require('lodash');
var Q = require('q');
var im = require('imagemagick');

var logger = require('../logger');

var galleryUtils = {
  getFiles: function(root) {
    return getFilesFilteredOnStats(root, isFile);
  },
  getFilesWithExtension: function(root, extensions) {
    var extensionArray = _.map(_.isArray(extensions) ? extensions : [extensions], _.lowerCase);
    return galleryUtils.getFiles(root).then(function(files) {
      return _.filter(files, function(fileName) {
        return _(extensionArray).map(function(ext) { return _.endsWith(_.lowerCase(fileName), ext); }).some();
      });
    });
  },
  getFilesFiltered: function(root, regexp) {
    return galleryUtils.getFiles(root).then(function(files) {
      return _.filter(files, function(fileName) {
        return regexp.test(fileName);
      });
    });
  },
  getDirectories: function(root) {
    return getFilesFilteredOnStats(root, isDirectory);
  },
  fileExists: function(path) {
    return Q.nfcall(fs.access, path.replace(' ', '\ ')).then(function() {
      return true;
    }, function() {
      return false;
    });
  },
  mkdir: function(path) {
    logger.info('Creating directory [' + path + ']');
    return Q.nfcall(fs.mkdir, path).fail(function(err) {});
  },
  createThumbnail: function(src, dest, width) {
    logger.info('Creating thumbnail [' + dest + '] from source [' + src + ']');
    //return Q.nfcall(function() { });
    return Q.nfcall(
      im.resize,
      {
        srcPath: src,
        dstPath: dest,
        width: width
      }
    );
  }
};

function isFile(stats) {
  return stats.isFile();
}

function isDirectory(stats) {
  return stats.isDirectory();
}

function getFilesFilteredOnStats(root, filterFn) {
  var result = [];
  return Q.nfcall(fs.readdir, root).then(function(fileNames) {
    var promises = _.map(fileNames, function(fileName) {
      return Q.nfcall(fs.stat, path.join(root, fileName)).then(function (fileStats) {
        if (filterFn(fileStats)) {
          result.push(fileName);
        }
      });
    });
    return Q.all(promises);
  }).then(function() {
    return result;
  });
}

module.exports = galleryUtils;
