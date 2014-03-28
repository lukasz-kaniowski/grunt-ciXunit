/*
 * grunt-ciXunit
 * https://github.com/lukasz-kaniowski/grunt-ciXunit
 *
 * Copyright (c) 2014 Lukasz Kaniowski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        ciXunit: {
            options: {
                files: [
                    {in: 'test/fixture/sampleLog.log', out: 'tmp/sampleLog.xml'},
                    {in: 'test/fixture/sampleLog2.log', out: 'tmp/sampleLog2.xml'}
                ]
            }
        },

        // Unit tests.
        mochaTest: {
            unit: ['test/**/*.spec.js'],
            options: {
                reporter: 'spec'
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'ciXunit', 'mochaTest']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
