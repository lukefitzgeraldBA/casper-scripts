/*
* Test script for homepage for visual regression testing with phantomcss
*
* @package:	Blueacorn phantomTest.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-25 08:22:27 Blue Acorn, Inc.
*/

//relative files paths for local testing
//import js files
phantom.page.injectJs('../../data/Constants.js');
phantom.page.injectJs('../../utilities/Start.js');
phantom.page.injectJs('../../utilities/Run.js');
phantom.page.injectJs('../../utilities/Screenshot.js');
phantom.page.injectJs('../../utilities/CommonTests.js');
/*
	Quick screenshot test to make sure National Wholesale is up and running
*/
casper.userAgent('Mozilla/5.0(Macintosh; Intel Mac OS X)');
/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory
*/

var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();

casper.test.begin('PhantomCSS Test', 7, function(test) {
	var x = require('casper').selectXPath;
	var fs = require( 'fs' );
	//phantomcss path for test suite testing
	//var path = '../utilities/PhantomCSS/';
	
	//phantomcss path for local testing
	var path = '../../utilities/PhantomCSS/';
	var phantomcss = require( path );
	casper.options.viewportSize = {width:1440, height:950};



	phantomcss.init({
		//rebase: casper.cli.get( "rebase" ),
		// SlimerJS needs explicit knowledge of this Casper, and lots of absolute paths
		casper: casper,
		//phantomcss path for test suite testing
		//libraryRoot: '../utilities/PhantomCSS' ,
		//phantomcss path for local testing
		libraryRoot: '../../utilities/PhantomCSS' ,
		screenshotRoot: 'images' ,
		failedComparisonsRoot: 'images/failures' ,
		addLabelToFailedImage: false,
		comparisonResultRoot: 'images/results',
		/*
		fileNameGetter: function overide_file_naming(){},
		onPass: function passCallback(){},
		onFail: function failCallback(){},
		onTimeout: function timeoutCallback(){},
		onComplete: function completeCallback(){},
		hideElements: '#thing.selector',
		addLabelToFailedImage: true,*/
		mismatchTolerance: 0,
		outputSettings: {
			errorColor: {
				red: 255,
				green: 0,
				blue: 255
			},
			errorType: 'movement',
			transparency: 0.3
		}
	});

	start.start('http://staging.shopnational.com', 'nat', 'pass4nat');

	//phantomcss.turnOffAnimations();

	var heroImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div:nth-child(3) > ul > li > div > div.large-image';
	var block1path = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(1) > div.img';
	var block2path = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(2) > div.img';
	var block3path = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col2 > div > div.img';
	var block4path = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.row > div.style3 > div.img';
	var block5path = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.row > div.style4.offset-top > div.img';
	var delay = 50;
	var hide = '';

	ct.testHttpStatus();

	/*
	casper.then(function() {
		screenshot.screenshotSelector('1casperbeforephantomblock1', block1path);
		screenshot.screenshotSelector('2casperbeforephantomblock2', block2path);
		screenshot.screenshotSelector('3casperbeforephantomblock2', block3path);
		screenshot.screenshotSelector('4casperbeforephantomblock2', block4path);
		screenshot.screenshotSelector('5casperbeforephantomblock2', block5path);	
	});
	*/
	
	casper.then(function() {
		//take screenshots with phantomcss
		phantomcss.screenshot(heroImagePath, delay, hide, '1heroImage');
		phantomcss.screenshot(block1path, delay, hide, '2phantomblock1');
		phantomcss.screenshot(block2path, delay, hide, '3phantomblock2');
		phantomcss.screenshot(block3path, delay, hide, '4phantomblock3');
		phantomcss.screenshot(block4path, delay, hide, '5phantomblock4');
		phantomcss.screenshot(block5path, delay, hide, '6phantomblock5');	
	});

	casper.then(function() {
		this.mouse.move('body > div.wrapper > div > div.main-container.col1-layout > div > div > div:nth-child(3) > ul > li > div > div.hero-content > div:nth-child(2) > button');
		screenshot.screenshotSelector('7hoverbutton', 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div:nth-child(3) > ul > li > div > div.hero-content > div:nth-child(2) > button');
	});

	casper.then(function() {
		phantomcss.compareAll();
	});

	run.run();
});
