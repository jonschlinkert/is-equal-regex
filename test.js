'use strict';

/* deps: mocha */
var assert = require('assert');
var isEqualRegex = require('./');

describe('isEqualRegex', function () {
  it('should return true if two regular expressions are the same:', function () {
    assert.equal(isEqualRegex(/foo/, /foo/), true);
    assert.equal(isEqualRegex(/bar/, /bar/), true);
    assert.equal(isEqualRegex(/^bar/, /^bar/), true);
    assert.equal(isEqualRegex(/^bar$/, /^bar$/), true);
    assert.equal(isEqualRegex(/^bar$/, new RegExp('^bar$')), true);
    assert.equal(isEqualRegex(new RegExp('^bar$'), /^bar$/), true);
  });

  it('should return false if two regular expressions are not the same:', function () {
    assert.equal(isEqualRegex(/foo/, /bar/), false);
    assert.equal(isEqualRegex(/foo/, /^foo/), false);
    assert.equal(isEqualRegex(/foo/m, /foo/m), true);
    assert.equal(isEqualRegex(/^bar$/gmi, new RegExp('^bar$')), false);
    assert.equal(isEqualRegex(new RegExp('^bar$'), /^bar$/gmi), false);
  });

  it('should return true when flags are the same:', function () {
    assert.equal(isEqualRegex(/foo/g, /foo/g), true);
    assert.equal(isEqualRegex(/foo/gm, /foo/gm), true);
    assert.equal(isEqualRegex(/foo/gmi, /foo/gmi), true);
    assert.equal(isEqualRegex(/foo/mi, /foo/mi), true);
    assert.equal(isEqualRegex(/foo/gi, /foo/gi), true);
    assert.equal(isEqualRegex(/foo/i, /foo/i), true);
    assert.equal(isEqualRegex(/foo/m, /foo/m), true);
    assert.equal(isEqualRegex(/^bar$/gmi, new RegExp('^bar$', 'gmi')), true);
    assert.equal(isEqualRegex(new RegExp('^bar$', 'gmi'), /^bar$/gmi), true);
  });

  it('should return false when flags are not the same:', function () {
    assert.equal(isEqualRegex(/foo/g, /foo/), false);
    assert.equal(isEqualRegex(/foo/g, /foo/), false);
    assert.equal(isEqualRegex(/foo/gm, /foo/), false);
    assert.equal(isEqualRegex(/foo/gmi, /foo/), false);
    assert.equal(isEqualRegex(/foo/mi, /foo/), false);
    assert.equal(isEqualRegex(/foo/gi, /foo/), false);
    assert.equal(isEqualRegex(/foo/i, /foo/), false);
    assert.equal(isEqualRegex(/foo/m, /foo/), false);
    assert.equal(isEqualRegex(/foo/, /foo/g), false);
    assert.equal(isEqualRegex(/foo/, /foo/g), false);
    assert.equal(isEqualRegex(/foo/, /foo/gm), false);
    assert.equal(isEqualRegex(/foo/, /foo/gmi), false);
    assert.equal(isEqualRegex(/foo/, /foo/mi), false);
    assert.equal(isEqualRegex(/foo/, /foo/gi), false);
    assert.equal(isEqualRegex(/foo/, /foo/i), false);
    assert.equal(isEqualRegex(/foo/, /foo/m), false);
  });

  it('should return false if either value is not a regex:', function () {
    assert.equal(isEqualRegex('a'), false);
    assert.equal(isEqualRegex('a', /foo/), false);
    assert.equal(isEqualRegex(/foo/, 'a'), false);
    assert.equal(isEqualRegex({}), false);
    assert.equal(isEqualRegex(/foo/, {}), false);
    assert.equal(isEqualRegex([]), false);
    assert.equal(isEqualRegex(/foo/, []), false);
    assert.equal(isEqualRegex(), false);
    assert.equal(isEqualRegex(/foo/), false);
    assert.equal(isEqualRegex(/foo/, null), false);
    assert.equal(isEqualRegex(null), false);
    assert.equal(isEqualRegex(undefined), false);
    assert.equal(isEqualRegex(/foo/, undefined), false);
    assert.equal(isEqualRegex(/foo/, new Date()), false);
    assert.equal(isEqualRegex(new Date(), /foo/), false);
  });
});
