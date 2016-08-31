var fs = require('fs');
var extend = require('node.extend');
var pa11y = require('pa11y');
var Horseman = require('node-horseman');

var scan = function(url, options, cb){
	var horseman = new Horseman(options)
	.on('consoleMessage', function( msg ){
    	console.log(msg);
  	});
	if(options.cookies){
		horseman = horseman.cookies(options.cookies);
	}
	if(options.headers){
		horseman = horseman.headers(options.headers);
	}
	if(options.authentication){
		horseman = horseman.authentication(options.authentication.username, options.authentication.password);
	}
	if(options.userAgent){
		horseman = horseman.userAgent(options.userAgent);
	}
	if(options.viewport){
		horseman = horseman.viewport(options.viewport.width, options.viewport.height);
	}
	
	horseman = horseman.open(url);
	
	options = extend(true, {}, pa11y.defaults, options);
	cb(horseman, function(hm, retFn){
		hm = hm.injectJs(__dirname+'/vendor/HTMLCS.js')
		  .injectJs(__dirname+'/vendor/inject.js');
		  
		if(options.screenshot){
		  	hm = hm.screenshotBase64('PNG')
			.then(function (screenshotBase64) {
    		    fs.writeFileSync(options.screenshot, new Buffer(screenshotBase64, 'base64'));
			})
		}
		  
		hm = hm.evaluate(function(options, done) {
			injectPa11y(window, options, function(data){
				done(null, data.messages);
			});
		}, options)
		.then(function(messages){
			retFn(messages);
		});
		    
		hm.close();
	});
}

var exports = module.exports = {};

exports.scan = scan;



