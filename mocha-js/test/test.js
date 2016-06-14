var objectForTest = require('./../project');
var assert = require('chai').assert;
var fs = require('fs');

// var describe = require('mocha').describe;

describe('Array', function() {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
});

describe('Test Value', function() {
	it('objectForTest test for \'t\' value', function () {
		assert.equal(objectForTest.t, 15);
	});
});

it('reads some file', function(done) {
	fs.readFile('./project/index.js', function(err, data) {
		if (err) return done(err);
		assert(data != null, "File should exist.");
		done();
	});
});

/* // you can use the promise
var fs = require('fs-promise');
it('reads some file', function() {
	return fs.readFile('someFile.json')
		.then(function(data) {
			assert(data != null, "File should exist.");
		});
});
*/
