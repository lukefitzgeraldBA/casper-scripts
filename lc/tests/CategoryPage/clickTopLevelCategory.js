/*
* Click a top level category to get to a subcategory page
*
* @package:	Blueacorn clickTopLevelCategory.js
* @version:	1.0
* @Author: 	Luke Fitzgerald	
* @Copyright:	Copyright 2015-09-07 18:35:49 Blue Acorn, Inc.
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

casper.test.begin('Click top level category, and then navigate to subcategory page', 5, function(test) {
	var productName;
	var randomCat;
	var randomCatName;
	var numSubCats;
	var randomSubCat;
	var randomSubCatName;
	var pageHeaderTrimmed;
	casper.options.viewportSize = {width:d.getDesktopBrowserWidth(), height:d.getBrowserHeight()};
	casper.options.waitTimeout = 10000;
	/*casper.options.verbose = true;
	casper.options.logLevel = 'debug';*/

	//debugging
	/*casper.on("page.error", function(msg, trace) {
	    this.echo("Error: " + msg, "ERROR");
	});

	casper.on("remote.message", function(msg) {
	    this.echo("Message: " + msg);
	});

	casper.on("resource.error", function(resourceError) {
	    this.echo("Resource Error: " + resourceError);
	});
	*/

	start.startWithCreds(d.getStagingDomain(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		randomCat = ct.getRandomInt(4, 1);
	});

	casper.then(function() {
		randomCatName = this.fetchText(header.getNavListElementDesktop() + ':nth-child(' + randomCat + ') > a > span');
		this.click(header.getNavListElementDesktop() + ':nth-child(' + randomCat + ') > a > span');
	});

	casper.then(function() {
		ct.testHttpStatus();
	});

	casper.then(function() {
		pageHeaderTrimmed = this.fetchText(cat.getCatPageHeader()).trim();
		ct.assertEquals(randomCatName, pageHeaderTrimmed, 'Navigated to correct category page!');
		numSubCats = this.getElementsInfo(cat.getSubCatListElements()).length;
	});

	casper.then(function() {
		randomSubCat = ct.getRandomInt(numSubCats, 1);
	});

	casper.then(function() {
		randomSubCatName = this.fetchText(cat.getSubCatListElements() + ':nth-child(' + randomSubCat + ') > a > h2');
		this.click(cat.getSubCatListElements() + ':nth-child(' + randomSubCat + ') > a > h2');
	});

	casper.then(function() {
		ct.testHttpStatus();
	});

	casper.then(function() {
		pageHeaderTrimmed = this.fetchText(cat.getCatPageHeader()).trim();
		ct.assertEquals(randomSubCatName, pageHeaderTrimmed, 'Navigated to correct subcategory page!');
	});

	run.run();
});
