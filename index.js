/*!
 * is-equal-regex <https://github.com/jonschlinkert/is-equal-regex>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var typeOf = require('kind-of');

/**
 * Designed to exit early/fail fast when false.
 */

function isEqualRegexp(a, b) {
  if (typeOf(a) !== 'regexp') return false;
  if (typeOf(b) !== 'regexp') return false;
  if (a.source !== b.source) return false;
  if (a.global !== b.global) return false;
  if (a.multiline !== b.multiline) return false;
  if (a.ignoreCase !== b.ignoreCase) return false;
  return true;
}

module.exports = isEqualRegexp;
