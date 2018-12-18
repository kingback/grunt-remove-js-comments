/*
 * grunt-remove-js-comments
 * https://github.com/kingback/grunt-remove-js-comments
 *
 * Copyright (c) 2018 kingback
 * Licensed under the MIT license.
 */

'use strict';

var babel = require('@babel/core');

module.exports = function(grunt) {
  grunt.registerMultiTask('remove_js_comments', 'Remove js comments without uglify the code', function() {
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      f.src.forEach(function(filepath) {
        // Warn on invalid source files
        if (grunt.file.isDir(filepath)) {
          grunt.verbose.warn('Source file "' + filepath + '" is a directory.');
        } else if (!/\.js/.test(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" is not a js file.');
        } else if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
        } else {
          try {
            // transform the code
            var res = babel.transformFileSync(filepath, { comments: false, babelrc: false });
            // Write the destination file.
            grunt.file.write(f.dest, res.code);
            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
          } catch (error) {
            // Abort when an error thrown.
            grunt.fail.warn(error);
          }
        }
      });
    });
  });
};
