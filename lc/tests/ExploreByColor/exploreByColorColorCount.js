/*
* Counting number of colors display on homepage explore by color block, and in mega menu
*
* @package:	Blueacorn exploreByColorColorCount.js
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
phantom.injectJs('../../pos/ExploreByColor.js');

//product page suite testing
/*phantom.injectJs('../data/Data.js');
phantom.injectJs('../utilities/Start.js');
phantom.injectJs('../utilities/Run.js');
phantom.injectJs('../utilities/Screenshot.js');
phantom.injectJs('../utilities/CommonTests.js');
phantom.injectJs('../pos/ColorWheel.js');
phantom.injectJs('../pos/AdminLogin.js');
phantom.injectJs('../pos/AdminSystemConfig.js');*/

var d = new Data();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var admin = new AdminLogin();
var ebc = new ExploreByColor();

casper.test.begin('Explore By Color test on homepage', 7, function(test) {
	var fs = require('fs');
	var numOptions;
	var numCurrentColors;
	var numExclusiveColors;
	var numArchivedColors;
	var numHomepageCurrentColors;
	var numHomepageExclusiveColors;
	var numHomepageArchivedColors;
	var numMmCurrentColors;
	var numMmExclusiveColors;
	var numMmArchivedColors;

	casper.options.viewportSize = {width:1200, height:950};
	// casper.options.verbose = true;
	// casper.options.logLevel = 'debug';
	start.startWithCreds(d.getStagingDomain(), d.getHttpUn(), d.getHttpPw());
	
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
		numCurrentColors = parseInt(fs.read('data/numCurrentColors.txt'));
		numExclusiveColors = parseInt(fs.read('data/numExclusiveColors.txt'));
		numArchivedColors = parseInt(fs.read('data/numArchivedColors.txt'));
	});

	casper.then(function() {
		//count number of colors displayed in homepage explore by color block
		numHomepageCurrentColors = this.getElementsInfo(ebc.getHomepageSingleCurrentColorBlock()).length;
		numHomepageExclusiveColors = this.getElementsInfo(ebc.getHomepageSingleExclusiveColorBlock()).length;
		numHomepageArchivedColors = this.getElementsInfo(ebc.getHomepageSingleArchivedColorBlock()).length;

		//ensure number of colors counted on homepage matches what was in admin
		ct.assertEquals(numCurrentColors, numHomepageCurrentColors);
		ct.assertEquals(numExclusiveColors, numHomepageExclusiveColors);
		ct.assertEquals(numArchivedColors, numHomepageArchivedColors);
	});

	casper.then(function() {
		//count number of colors displayed in homepage explore by color block
		numMmCurrentColors = this.getElementsInfo(ebc.getMegaMenuSingleCurrentColorBlock()).length;
		numMmExclusiveColors = this.getElementsInfo(ebc.getMegaMenuSingleExclusiveColorBlock()).length;
		numMmArchivedColors = this.getElementsInfo(ebc.getMegaMenuSingleArchivedColorBlock()).length;

		//ensure number of colors counted in mega menu matches what was in admin
		ct.assertEquals(numCurrentColors, numMmCurrentColors);
		ct.assertEquals(numExclusiveColors, numMmExclusiveColors);
		ct.assertEquals(numArchivedColors, numMmArchivedColors);
	});

	run.run();
});
