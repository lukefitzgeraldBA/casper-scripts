/*
* Getting configuration options from admin 
*
* @package:	Blueacorn exploreByColorAdminGrid.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-08-10 13:40:54 Blue Acorn, Inc.
*/

casper.userAgent('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1')

//local testing
phantom.injectJs('../../data/Data.js');
phantom.injectJs('../../utilities/Start.js');
phantom.injectJs('../../utilities/Run.js');
phantom.injectJs('../../utilities/Screenshot.js');
phantom.injectJs('../../utilities/CommonTests.js');
phantom.injectJs('../../pos/AdminLogin.js');
phantom.injectJs('../../pos/AdminSystemConfig.js');

//product page suite testing
// phantom.injectJs('../data/Data.js');
// phantom.injectJs('../utilities/Start.js');
// phantom.injectJs('../utilities/Run.js');
// phantom.injectJs('../utilities/Screenshot.js');
// phantom.injectJs('../utilities/CommonTests.js');
// phantom.injectJs('../pos/ColorWheel.js');
// phantom.injectJs('../pos/AdminLogin.js');
// phantom.injectJs('../pos/AdminSystemConfig.js');

var d = new Data();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var admin = new AdminLogin();
var sysConfig = new AdminSystemConfig();

casper.test.begin('Access Test', 1, function(test) {
	var numOptions;
	var ebc;
	var numColors;
	var numCurrentColors;
	var numExclusiveColors;
	var numRetiredColors;
	var fs = require('fs');

	casper.options.viewportSize = {width:1200, height:950};
	// casper.options.verbose = true;
	// casper.options.logLevel = 'debug';
	start.startWithCreds(d.getStagingDomain() + d.getAdminSystemConfig(), d.getHttpUn(), d.getHttpPw());
	
	//debugging
	/*casper.on("page.error", function(msg, trace) {
	    this.echo("Error: " + msg, "ERROR");
	});

	casper.on("remote.message", function(msg) {
	    this.echo("Message: " + msg);
	});

	casper.on("resource.error", function(resourceError) {
	    this.echo("Resource Error: " + resourceError);
	});*/

	ct.testHttpStatus();

	casper.then(function() {
		this.fillSelectors('#loginForm', {
	        '#username': d.getUn(),
	        '#login': d.getPw(),
	    }, true);
	});

	casper.then(function() {
		numOptions = this.getElementsInfo(sysConfig.getBaSystemConfigOptions()).length;
	});

	casper.then(function() {
		var ct = 1;

		this.repeat(numOptions, function() {
			var string = this.fetchText(sysConfig.getBaSystemConfigOptions() + ':nth-child(' + ct + ') > a > span');

			if(string.trim() == 'Explore By Color') {
				ebc = sysConfig.getBaSystemConfigOptions() + ':nth-child(' + ct + ') > a > span';
			}
			ct++;
		});
	});

	casper.then(function() {
		this.click(ebc);
	});

	casper.wait(3000).then(function() {
		numColors = this.getElementsInfo(sysConfig.getAdminColorGridRow()).length;
		this.echo(numColors - 2);
	});

	casper.then(function() {
		var count = 1;
		var ct = 1;
		numCurrentColors = 0;
		numExclusiveColors = 0;
		numRetiredColors = 0;

		//count the number of colors for each color type
		this.repeat(numColors - 1, function() {

			this.repeat(3, function() {
				if(sysConfig.extractSelected(sysConfig.getAdminColorGridRow() + ':nth-child(' + count + ') > td:nth-child(2) > select > option:nth-child(' + ct + ')') != null) {
					switch(ct) {
					    case 1:
					        numCurrentColors++;
					        break;
					    case 2:
					        numExclusiveColors++;
					        break;
					    case 3:
					       	numRetiredColors++;
					       	break;
					}
				}

				if (ct == 3) {
					ct = 1;
				}
				else {
					ct++;
				}
			});

			count++;
		});
	});

	casper.then(function() {
		fs.write('data/numCurrentColors.txt', numCurrentColors, 'w');
		fs.write('data/numExclusiveColors.txt', numExclusiveColors, 'w');
		fs.write('data/numArchivedColors.txt', numRetiredColors, 'w');
	});

	casper.then(function() {
		var count = 1;
		var ct = 1;
		var ct2 = 1;
		var arrayNum = 1;
		var totalNumColors = 42;

		this.repeat(numColors - 1, function() {
			
			this.repeat(totalNumColors, function() {
				
				if(sysConfig.extractSelected(sysConfig.getAdminColorGridRow() + ':nth-child(' + count + ') > td:nth-child(1) > select > option:nth-child(' + ct + ')') != null) {
					//this.echo(sysConfig.extractName(sysConfig.getAdminColorGridRow() + ':nth-child(' + count + ') > td:nth-child(1) > select > option:nth-child(' + ct + ')'));
					var arrayName = 'array' + arrayNum;
					var array = new Array();
					array.push(sysConfig.extractName(sysConfig.getAdminColorGridRow() + ':nth-child(' + count + ') > td:nth-child(1) > select > option:nth-child(' + ct + ')'));

					this.repeat(totalNumColors, function() {
						if(sysConfig.extractSelected(sysConfig.getAdminColorGridRow() + ':nth-child(' + count + ') > td:nth-child(4) > select > option:nth-child(' + ct2 + ')') != null) {
							//this.echo(sysConfig.extractName(sysConfig.getAdminColorGridRow() + ':nth-child(' + count + ') > td:nth-child(4) > select > option:nth-child(' + ct2 + ')'));
							array.push(sysConfig.extractName(sysConfig.getAdminColorGridRow() + ':nth-child(' + count + ') > td:nth-child(4) > select > option:nth-child(' + ct2 + ')'));
						}

						if (ct2 == totalNumColors) {
							fs.write('data/' + array[0] + '.txt', array, 'w');
							ct2 = 1;
						}
						else {
							ct2++;
						}

					});

				}
			
				if (ct == totalNumColors) {
					ct = 1;
				}
				else {
					ct++;
				}
				
			});

			count ++;
		});
	});

	run.run();
});
