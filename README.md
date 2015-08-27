# selector-has

A helper utility to check the presence of a class in a CSS selector

# usage

```javascript
var has = require('selector-has');

has('.foo > .bar', 'foo');
// => true

has('.foobar', 'foo');
// => false

```
