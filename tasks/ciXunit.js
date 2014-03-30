/*
 * grunt-cixunit
 * https://github.com/lukasz-kaniowski/grunt-ciXunit
 *
 * Copyright (c) 2014 Lukasz Kaniowski
 * Licensed under the MIT license.
 */

'use strict';

var Q = require('q'),
    xunitFilter = require('../lib/xunit-filter');

module.exports = function (grunt) {

    grunt.registerTask('cixunit', 'Helpers for parsing log output to xunit format', function () {
        var done = this.async(),
            options = this.options({
                files: []
            });


        var parseFile = function (file) {
            grunt.log.writeln('Parsing file ' + file.in + ' to ' + file.out);
            return xunitFilter.filterLogFile(file.in)
                .then(function (output) {
                    grunt.file.write(file.out, output);
                    return;
                })
                .fail(function (err) {
                    grunt.log.writeln('Failed for file ', JSON.stringify(file), 'with error: ', err);
                    return;
                });
        };

        var promises = options.files.map(function (file) {
            return parseFile(file);
        });
        Q.all(promises)
            .then(function () {
                grunt.log.writeln('Parsing finished');
                done();
            })
            .fail(function (error) {
                grunt.log.writeln('Parsing failed', error);
                done(error);
            });

    });


};
