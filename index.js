'use strict';

var BufferStreams = require('bufferstreams');
var sanitizeHtml = require('sanitize-html');
var gutil = require('gulp-util');
var objectAssign = require('object-assign');
var Transform = require('readable-stream/transform');
var tryit = require('tryit');

sanitizeHtml.transform = function(options) {
  return new Transform({
    objectMode: true,
    transform: function htmlminTransform(file, enc, cb) {
      if (file.isNull()) {
        cb(null, file);
        return;
      }

      if (!options) {
        options = sanitizeHtml.defaults;
      }

      function sanitizeHtmlFunction(buf, done) {
        var result;
        tryit(function() {
          result = new Buffer(sanitizeHtml(String(buf), options));
        }, function(err) {
          if (err) {
            options = objectAssign({}, options, {fileName: file.path});
            done(new gutil.PluginError('gulp-sanitize-html', err, options));
            return;
          }
          done(null, result);
        });
      }

      var self = this;

      if (file.isStream()) {
        file.contents.pipe(new BufferStreams(function(none, buf, done) {
          sanitizeHtmlFunction(buf, function(err, contents) {
            if (err) {
              self.emit('error', err);
              done(err);
            } else {
              done(null, contents);
              self.push(file);
            }
            cb();
          });
        }));
        return;
      }

      sanitizeHtmlFunction(file.contents, function(err, contents) {
        if (err) {
          self.emit('error', err);
        } else {
          file.contents = contents;
          self.push(file);
        }
        cb();
      });
    }
  });
};

module.exports = sanitizeHtml;
