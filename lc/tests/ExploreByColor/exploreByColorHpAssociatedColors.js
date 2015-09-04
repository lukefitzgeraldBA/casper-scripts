/*
* Ensure that associated colors assigned to colors in admin are properly associated on front end
*
* @package:	Blueacorn exploreByColorHpAssociatedColors.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-08-27 07:59:31 Blue Acorn, Inc.
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
var ebc = new ExploreByColor();

casper.test.begin('Explore By Color test on homepage', function(test) {
	var fs = require('fs');
	var numCurrentColors;
	var numExclusiveColors;
	var numArchivedColors;
	var numHomepageCurrentColors;
	var numHomepageExclusiveColors;
	var numHomepageArchivedColors;
	var randomNum;
	var randomPath;
	var randomColorName;
	var filename;
	var array;
	var arrayLength;
	var loopLength;

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

		this.echo(numHomepageCurrentColors);

		//ensure number of colors counted on homepage matches what was in admin
		ct.assertEquals(numCurrentColors, numHomepageCurrentColors);
		ct.assertEquals(numExclusiveColors, numHomepageExclusiveColors);
		ct.assertEquals(numArchivedColors, numHomepageArchivedColors);
	});

	casper.then(function() {
		randomNum = ct.getRandomInt((numHomepageCurrentColors), 1);
		randomPath = ebc.getHomepageSingleCurrentColorBlock() + ':nth-child(' + randomNum + ') > div';
		randomColorName = this.fetchText(ebc.getHomepageSingleCurrentColorBlock() + ':nth-child(' + randomNum + ') > div');
	});

	casper.then(function() {
		filename = 'data/' + randomColorName + '.txt';
		this.echo('data/' + randomColorName + '.txt');
		
		array = fs.readFileSync('data/' + randomColorName + '.txt').toString().split(',');
			//output each array element into console
			/*for(i in array) {
			    console.log(array[i]);
			}*/
		arrayLength = array.length;
	});

	//this scroll was for testing purposes only
	casper.then(function() {
		//scroll down page, just to see what is happening
		this.scrollTo(0, 1295);
	});

	casper.then(function() {
		this.click(randomPath);
	});

	casper.wait(2000).then(function() {
		//count associated color blocks on page, compare to what was read into file
		arrayStart = 1;

		this.echo(arrayLength);
		
		if (arrayLength <= 4) {
			loopLength = arrayLength - 1;
		}
		else {
			loopLength = 4;
		}
	
		this.repeat(loopLength, function() {
			var arrayEle = (array[arrayStart]);
			var pageEle = (this.fetchText(ebc.getHomepageSingleAssociatedColorBlock() + ':nth-child(' + arrayStart + ') > div.color-name'));

			//compare array color name to what is displayed on page
			ct.assertEquals(arrayEle, pageEle, 'Names match');
			arrayStart++;
		});

		ct.assertDoesntExist(ebc.getHomepageSingleAssociatedColorBlock() + ':nth-child(' + (loopLength + 1) + ')', 'Any additional color blocks are not displayed!');
	});

	run.run();
});
