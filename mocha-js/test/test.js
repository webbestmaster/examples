var objectForTest = require('./../project');
var assert = require('chai').assert;
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

