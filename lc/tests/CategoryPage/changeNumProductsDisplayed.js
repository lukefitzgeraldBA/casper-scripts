/*
* Test number of products displayed, change number of products displayed
*
* @package:	Blueacorn changeNumProductsDisplayed.js
* @version:	1.0
* @Author:  Luke Fitzgerald
* @Copyright:	Copyright 2015-09-07 20:35:18 Blue Acorn, Inc.
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

casper.test.begin('Change number of products displayed', function(test) {
	var numProducts;
	var flag;
	casper.options.viewportSize = {width:d.getDesktopBrowserWidth(), height:d.getBrowserHeight()};
	casper.options.waitTimeout = 30000;

	start.startWithCreds(d.getStagingDomain() + d.getSubCatPage2(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		ct.assertEquals('24', this.fetchText(cat.getNumDisplayed()), 'Max number of products set to display on page load is 24');
		numProducts = this.getElementsInfo(cat.getProductListElements()).length;
	});

	casper.then(function() {
		test.assert(numProducts <= 24, 'No more than 24 products are displayed');

		if(numProducts == 24) {
			this.click(cat.getShowDropdown());
			this.click(cat.getShow48());
		}
		else {
			this.die('Number of products in this subcategory is less than 24');
		}
	});

	casper.waitWhileVisible(cat.getOverlay(), function() {
		//this.echo('done waiting');
		ct.assertEquals('48', this.fetchText(cat.getNumDisplayed()), 'Max number of products set to display on page is 48');	
		numProducts = this.getElementsInfo(cat.getProductListElements()).length;
	});

	casper.then(function() {
		//this.echo(numProducts);
		test.assert(numProducts <= 48, 'No more than 48 products are displayed');
		test.assert(numProducts >= 24, '24 or more products are displayed');

		if(numProducts == 48) {
			flag = 0;
			this.click(cat.getShowDropdown());
			this.click(cat.getShowAll());
			this.echo('clicking all');	

		}
		else {
			flag = 1;
			this.click(cat.getShowDropdown());
			this.click(cat.getShow24());
			this.echo('clicking 24');	
		}
	});

	casper.waitWhileVisible(cat.getOverlay(), function() {
		//this.echo('done waiting');
		numProducts = this.getElementsInfo(cat.getProductListElements()).length;

		if(flag == 0) {
			test.assert(numProducts >= 48, '48 or more products are displayed');
			ct.assertEquals('All', this.fetchText(cat.getNumDisplayed()), 'All products are displayed on page');	
			numProducts = this.getElementsInfo(cat.getProductListElements()).length;
		}
		else if (flag == 1) {
			test.assert(numProducts <= 24, 'No more than 24 products are displayed');
			ct.assertEquals('24', this.fetchText(cat.getNumDisplayed()), 'Max number of products set to display on page is 24');
			this.die('Number of products in this subcategory is less than or equal to 24, exiting script');
		}
	});

	casper.then(function() {
		this.click(cat.getShowDropdown());
		this.click(cat.getShow24());
		this.echo('clicking 24');	
	});

	casper.waitWhileVisible(cat.getOverlay(), function() {
		numProducts = this.getElementsInfo(cat.getProductListElements()).length;
	});

	casper.then(function() {
		test.assert(numProducts <= 24, 'No more than 24 products are displayed');
		ct.assertEquals('24', this.fetchText(cat.getNumDisplayed()), 'Max number of products set to display on page is 24');
	});

	ct.clearCookies();

	run.run();
});
