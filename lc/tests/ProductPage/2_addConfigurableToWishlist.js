/*
* Add configurable product to wishlist, not logged in
*
* @package:	Blueacorn 2_addConfigurableToWishlist.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-09-04 11:46:40 Blue Acorn, Inc.
*/

'use strict';

casper.userAgent('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1')

//local testing
/*phantom.injectJs('../../data/Data.js');
phantom.injectJs('../../utilities/Start.js');
phantom.injectJs('../../utilities/Run.js');
phantom.injectJs('../../utilities/Screenshot.js');
phantom.injectJs('../../utilities/CommonTests.js');
phantom.injectJs('../../pos/ConfigurableProductPage.js');
phantom.injectJs('../../pos/Header.js');
phantom.injectJs('../../pos/AccountLogin.js');
phantom.injectJs('../../pos/MyWishlists.js');*/

//product page suite testing
phantom.injectJs('../data/Data.js');
phantom.injectJs('../utilities/Start.js');
phantom.injectJs('../utilities/Run.js');
phantom.injectJs('../utilities/Screenshot.js');
phantom.injectJs('../utilities/CommonTests.js');
phantom.injectJs('../pos/ConfigurableProductPage.js');
phantom.injectJs('../pos/Header.js');
phantom.injectJs('../pos/AccountLogin.js');
phantom.injectJs('../pos/MyWishlists.js');

var d = new Data();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var cpp = new ConfigurableProductPage();
var header = new Header();
var acct = new AccountLogin();
var wish = new MyWishlists();

casper.test.begin('Add configurable product to wishlist, not logged in', 6, function(test) {
	var productName;
	
	casper.options.viewportSize = {width:d.getDesktopBrowserWidth(), height:d.getBrowserHeight()};
	casper.options.waitTimeout = 10000;

	start.startWithCreds(d.getStagingDomain() + d.getConfigProd1(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		//get product name, assert wishlist button exists
		productName = this.fetchText(cpp.getProductName());
		ct.assertExists(cpp.getAddToWishlistButton());
	});

	casper.then(function() {
		this.click(cpp.getAddToWishlistButton());
	});

	casper.waitForUrl(d.getStagingDomain() + d.getCustomerAccountLoginUrl(), function() {
		ct.assertUrlMatch(d.getStagingDomain() + d.getCustomerAccountLoginUrl(), 'Successfully taken to account login page!');
	});

	casper.then(function() {
		this.sendKeys(acct.getEmail(), d.getUn());
		this.sendKeys(acct.getPw(), d.getPw());
	});

	casper.then(function() {
		this.click(acct.getLoginButton());
	});

	casper.then(function() {
		//assert success message exists, is displayed, and matches expected value
		ct.assertExists(wish.getSuccessMessage());
		ct.assertVisible(wish.getSuccessMessage());
		ct.assertEquals((productName + ' has been added to your wishlist. Click here to continue shopping.'), 
							this.fetchText(wish.getSuccessMessage()), 'Success message is displayed successfully, equals expected message');
	});

	casper.then(function() {
		ct.clearCookies()
	});


	run.run();
});