# selector-has

[![build status][travis]][travis-uri]
[![coverage status][deps]][deps-uri]

A helper utility to check the presence of a class in a CSS selector

# usage

```javascript
var has = require('selector-has');

has('.foo > .bar', 'foo');
// => true

has('.foobar', 'foo');
// => false

```

[travis]: https://travis-ci.org/rtsao/selector-has.svg?branch=master
[travis-uri]: https://travis-ci.org/rtsao/selector-has

[deps]: https://david-dm.org/rtsao/selector-has.svg
[deps-uri]: https://david-dm.org/rtsao/selector-has
