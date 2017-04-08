/*!
 * preliminaries <https://github.com/josephearl/preliminaries.git>
 *
 * Copyright (C) 2017 Joseph Earl.
 * Copyright (C) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var preliminaries = require('preliminaries');
require('should');

describe('stringify YAML:', function() {  
  before(function() {
    require('..')(true);
  });

  after(function() {
    preliminaries.unregisterParser('yaml');
  });

  it('should extract front matter, extend it, and convert it back to front matter', function() {
    var data = {name: 'a long test name'};
    var res = preliminaries.stringify('Name: {{name}}', data, {lang: 'yaml'});
    res.should.equal([
      '---yaml',
      'name: a long test name',
      '---',
      'Name: {{name}}\n'
    ].join('\n'));
  });

  it('should use custom delimiters', function() {
    var data = {name: 'test-name'};
    var res = preliminaries.stringify('Name: {{name}}', data, {delims: '~~~', lang: 'yaml'});
    res.should.equal([
      '~~~',
      'name: test-name',
      '~~~',
      'Name: {{name}}\n'
    ].join('\n'));
  });

  it('should use parser delimiters', function() {
    var data = {name: 'test-name'};
    var res = preliminaries.stringify('Name: {{name}}', data, {stringifyUseParserDelims: true, lang: 'yaml'});
    res.should.equal([
      '---',
      'name: test-name',
      '---',
      'Name: {{name}}\n'
    ].join('\n'));
  });
});
