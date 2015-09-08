/*
* Test default column display, and whether changing the column display works
*
* @package:	Blueacorn changeNumColumns.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-09-07 20:12:14 Blue Acorn, Inc.
*/

'use strict';

casper.userAgent('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1')

//local testing
phantom.injectJs('../../data/Data.js');
phantom.injectJs('../../utilities/Start.js');
phantom.injectJs('../../utilities/Run.js');
phantom.injectJs('../../utilities/Screenshot.js');
phantom.injectJs('../../utilities/CommonTests.js');
phantom.injectJs('../../pos/CategoryPage.js');
phantom.injectJs('../../pos/Header.js');

//product page suite testing
/*phantom.injectJs('../data/Data.js');
phantom.injectJs('../utilities/Start.js');
phantom.injectJs('../utilities/Run.js');
phantom.injectJs('../utilities/Screenshot.js');
phantom.injectJs('../utilities/CommonTests.js');
phantom.injectJs('../pos/SimpleProductPage.js');
phantom.injectJs('../pos/Header.js');
phantom.injectJs('../pos/CategoryPage.js');
phantom.injectJs('../pos/Header.js');*/

var d = new Data();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var cat = new CategoryPage();
var header = new Header();

casper.test.begin('Check to see what column layout is displayed by default, change column layout', 7, function(test) {
	var productName;
	casper.options.viewportSize = {width:d.getDesktopBrowserWidth(), height:d.getBrowserHeight()};
	casper.options.waitTimeout = 10000;

	start.startWithCreds(d.getStagingDomain() + d.getSubCatPage1(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		//test that 2 column display is active by default, and four column display is inactive
		ct.assertExists(cat.getTwoColumnDisplay() + '.active');
		ct.assertDoesntExist(cat.getFourColumnDisplay() + '.active', 'Four column display is not active!');
	});

	casper.then(function() {
		this.click(cat.getFourColumnDisplay());
	});

	casper.then(function() {
		ct.assertExists(cat.getFourColumnDisplay() + '.active');
		ct.assertDoesntExist(cat.getTwoColumnDisplay() + '.active', 'Two column display is no longer active!');
	});

	casper.then(function() {
		this.click(cat.getTwoColumnDisplay());
	});

	casper.then(function() {
		ct.assertExists(cat.getTwoColumnDisplay() + '.active');
		ct.assertDoesntExist(cat.getFourColumnDisplay() + '.active', 'Four column display is not active!');
	});

	ct.clearCookies();

	run.run();
});
