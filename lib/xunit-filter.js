/*
 * grunt-cixunit
 * https://github.com/lukasz-kaniowski/grunt-ciXunit
 *
 * Copyright (c) 2014 Lukasz Kaniowski
 * Licensed under the MIT license.
 */

var grep = require('grep1'),
    Q = require('q');

const GREP_STRING = '</\\?test';

/**
 * Parsing logFile and extracting junit content
 *
 * @param logFilePath - path to logfile to be parse
 * @returns {Function|promise|promise|Q.promise}
 */
exports.filterLogFile = function (logFilePath) {
    var deferred = Q.defer();

    grep([ GREP_STRING, logFilePath], function (err, stdout, stderr) {
        if (err || stderr) {
            deferred.reject(err)
        } else {
            deferred.resolve(stdout);
        }

    });

    return deferred.promise;
};