'use strict';

var Pattern = require('../joins/pattern');

module.exports = function thenDo(source, selector) {
  return new Pattern([this]).thenDo(selector);
};
