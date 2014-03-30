/*
 * grunt-cixunit
 * https://github.com/lukasz-kaniowski/grunt-ciXunit
 *
 * Copyright (c) 2014 Lukasz Kaniowski
 * Licensed under the MIT license.
 */

var fs = require('fs')  ,
    Q = require('q');

/**
 * Parsing logFile and extracting junit content
 *
 * @param logFilePath - path to logfile to be parse
 * @returns {Function|promise|promise|Q.promise}
 */
exports.filterLogFile = function (logFilePath) {
    var deferred = Q.defer();

    fs.readFile(logFilePath, function (err, data) {
        if (err) return deferred.reject(err);

        var result = data.toString().match(/<\/?test.*/g) || [];
        return deferred.resolve(result.join('\n'));

    });

    return deferred.promise;
};