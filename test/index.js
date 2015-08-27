var test = require('tape');
var each = require('foreach');
var cases = require('./foo-cases');
var selectorHas = require('../');

function testCase(expected, selector) {
    test('test selector: ' + '`' + selector + '`', function t(assert) {
        assert.equal(selectorHas(selector, 'foo'), expected,
          expected ? 'has .foo': 'does not have .foo'
        );
        assert.end();
    });
}

each(cases, testCase);
