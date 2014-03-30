var xunitFilter = require('../../lib/xunit-filter');
var fs = require('fs');

describe('Xunit Filter', function () {
    var logFilePath = 'tmp/sampleLog';

    beforeEach(function (done) {
        fs.unlink(logFilePath, function () {
            done();
        });
    });

    describe('filterLogFile', function () {

        it('should resolve promise and filter log file', function (done) {
            fs.writeFileSync(logFilePath, 'aaaa\n' +
                '<testsuite>\n' +
                'adfasdf\n' +
                '<testcase>\n' +
                '</testcase>\n' +
                '</testsuite>'
            );


            expect(xunitFilter.filterLogFile(logFilePath)).to.eventually.be.fulfilled
                .and.eql('<testsuite>\n' +
                    '<testcase>\n' +
                    '</testcase>\n' +
                    '</testsuite>'
                )
                .and.notify(done);
        });

        it('should resolve promise and filter log file if no junit output', function (done) {
            fs.writeFileSync(logFilePath, 'aaaa');


            expect(xunitFilter.filterLogFile(logFilePath)).to.eventually.be.fulfilled
                .and.eql('')
                .and.notify(done);
        });


        it('should reject promise if log file not exists', function (done) {

            expect(xunitFilter.filterLogFile('aa')).to.eventually.be.rejected
                .and.notify(done);
        });

    });
});