//var Pa11yHorseman = require("pa11y-horseman");
var Pa11yHorseman = require("../lib/index");
var fs = require('fs');

pa11yHorseman = new Pa11yHorseman();

pa11yHorseman.open('http://www.google.com')
    .type('input[name="q"]', 'github')
    .keyboardEvent('keypress', 16777221)
    .wait(5000)
    .screenshotBase64('PNG').then(function (screenshotBase64) {
    	fs.writeFileSync('/tmp/screen.png', new Buffer(screenshotBase64, 'base64'));
	})
    .pa11y()
    .then((data) => {
    	console.log(data);
    })
    .close()