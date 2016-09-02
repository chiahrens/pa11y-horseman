var fs = require('fs');
var extend = require('node.extend');
var pa11y = require('pa11y');
var Horseman = require('node-horseman');

Horseman.registerAction('pa11y', function(options) {
	options = extend(true, {}, pa11y.defaults, options);
	return this
		.injectJs(__dirname+'/vendor/HTMLCS.js')
		.injectJs(__dirname+'/vendor/inject.js')
    	.evaluate(function(options, done) {
			injectPa11y(window, options, function(data){
				done(null, data.messages);
			});
		}, options);
});

module.exports = Horseman;



