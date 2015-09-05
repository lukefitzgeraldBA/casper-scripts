/*
* Add simple product to cart
*
* @package:	Blueacorn 3_addSimpleToCart.js
* @version:	1.0
* @Author: 	Luke
* @Copyright:	Copyright 2015-09-04 07:10:24 Blue Acorn, Inc.
*/

'use strict';

casper.userAgent('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1')

//local testing
/*phantom.injectJs('../../data/Data.js');
phantom.injectJs('../../utilities/Start.js');
phantom.injectJs('../../utilities/Run.js');
phantom.injectJs('../../utilities/Screenshot.js');
phantom.injectJs('../../utilities/CommonTests.js');
phantom.injectJs('../../pos/SimpleProductPage.js');
phantom.injectJs('../../pos/Header.js');*/

//product page suite testing
phantom.injectJs('../data/Data.js');
phantom.injectJs('../utilities/Start.js');
phantom.injectJs('../utilities/Run.js');
phantom.injectJs('../utilities/Screenshot.js');
phantom.injectJs('../utilities/CommonTests.js');
phantom.injectJs('../pos/SimpleProductPage.js');
phantom.injectJs('../pos/Header.js');

var d = new Data();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var spp = new SimpleProductPage();
var header = new Header();

casper.test.begin('Add simple product to cart', 5, function(test) {
	var productName;
	casper.options.viewportSize = {width:d.getDesktopBrowserWidth(), height:d.getBrowserHeight()};
	casper.options.waitTimeout = 10000;

	start.startWithCreds(d.getStagingDomain() + d.getSimpleProd3(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		//get product name, assert mini cart is closed, assert add to cart button exists
		productName = this.fetchText(spp.getProductName());
		ct.assertExists(header.getClosedMiniCart());
		ct.assertExists(spp.getAddToCartButton());
	});

	casper.then(function() {
		//add product to cart
		this.click(spp.getAddToCartButton());
	});
	
	casper.waitForSelector(header.getOpenMiniCart(), function() {
		casper.waitForText('Recently added items', function() {
			this.echo(this.fetchText(header.getMiniCartSuccessMessage()));
		});
	});

	casper.then(function() {
		ct.assertExists(header.getMiniCartProducts() + ':nth-child(1)');
		ct.assertEquals(productName, this.fetchText(header.getMiniCartProducts() + ':nth-child(1) > div > div > p.product-name > a'), 'Product name in mini cart matches product name on page!');
	});

	run.run();
});
