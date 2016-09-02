# pa11y-horseman

pa11y-horseman lets you use [Horseman](https://github.com/johntitus/node-horseman) API with [pa11y](https://github.com/pa11y/pa11y) scans for accessibility.

## Examples

### Scan search results on Google

```js
var Pa11yHorseman = require("pa11y-horseman");

pa11yHorseman = new Pa11yHorseman();

pa11yHorseman.open('http://www.google.com')
    .type('input[name="q"]', 'github')
    .keyboardEvent('keypress', 16777221)
    .wait(5000)
    .pa11y()
    .then((data) => {
    	console.log(data);
    })
    .close()
```

### Scan search results on Google and ignore notices

```js
var Pa11yHorseman = require("pa11y-horseman");

pa11yHorseman = new Pa11yHorseman();

pa11yHorseman.open('http://www.google.com')
    .type('input[name="q"]', 'github')
    .keyboardEvent('keypress', 16777221)
    .wait(5000)
    .pa11y({ignore:['notice']})
    .then((data) => {
    	console.log(data);
    })
    .close()
```

## Installation

`npm install pa11y-horseman`

## API

### Scan
```
pa11yHorseman.pa11y(pa11yOptions)
.then((data) =>{
    // data contains the pa11y scan results
});
```
Scan the webpage using [pa11y](https://github.com/pa11y/pa11y)

  
### Please see [Horseman](https://github.com/johntitus/node-horseman) for full API supported by Horseman

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright (c) Chi Ahrens <cahrens@walmartlabs.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
