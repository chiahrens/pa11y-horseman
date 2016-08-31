# pa11y-horseman

pa11y-horseman lets you use [Horseman](https://github.com/johntitus/node-horseman) API with [pa11y](https://github.com/pa11y/pa11y) scans for accessibility.

## Examples

### Scan search results on Google

```js
var pa11yHorseman = require("pa11y-horseman");

pa11yHorseman.scan('http://www.google.com', {}, function(horseman, done){
  horseman = horseman
    .type('input[name="q"]', 'github')
    .click('[name="btnK"]')
    .keyboardEvent('keypress', 16777221)
    .waitForSelector('div.g');
  done(horseman,function(data){
    console.log(data);
  });	
});
```

### Scan search results on Google using different userAgent, viewport, and save screenshot.

```js
var pa11yHorseman = require("pa11y-horseman");

pa11yHorseman.scan('http://www.google.com', {
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
  viewport:{
    width: 1200,
    height: 800
  },
  screenshot: '/tmp/screenshot.png'
}, function(horseman, done){
  horseman = horseman
    .type('input[name="q"]', 'github')
    .click('[name="btnK"]')
    .keyboardEvent('keypress', 16777221)
    .waitForSelector('div.g');
  done(horseman,function(data){
    console.log(data);
  });	
});
```

## Installation

`npm install pa11y-horseman`

## API

### Scan
```
pa11yHorseman.scan(url, options, function(horseman, done){
  // make your horseman calls here
  done(horseman, function(data)){
    // data contains the pa11y scan results
  }
});
```
Create a new instance that can navigate around the web.

The available options are:

  * [Some options available in Horseman](https://github.com/johntitus/node-horseman#setup)
  * [Some options available in pa11y](https://github.com/pa11y/pa11y#configuration)
  * `cookies` an array of cookies as expected by Phantomjs.
  * `headers` an array of headers as expected by Phantomjs.
  * `authentication` an object of username and password for basic authentication as expected by Phantomjs.
  * `userAgent` a string value for userAgent as expected by Phantomjs.
  * `viewport` an object of width and height as expected by Phantomjs.
  * `screenshot` a string value of full path including filename of the screenshot file.
  * 
  
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
