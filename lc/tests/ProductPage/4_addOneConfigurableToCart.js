/*
* Add configurable product with 1 configuration option to cart
*
* @package:	Blueacorn 4_addOneConfigurableToCart.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-09-04 08:30:21 Blue Acorn, Inc.
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
var scpp = new ConfigurableProductPage();
var header = new Header();

casper.test.begin('Add configurable product to cart, with only one configuration option', 5, function(test) {
	var productName;
	var randomConfig1Selection;
	var randomConfigColorName;
	var numConfigOptions;
	casper.options.viewportSize = {width:d.getDesktopBrowserWidth(), height:d.getBrowserHeight()};
	casper.options.waitTimeout = 10000;

	start.startWithCreds(d.getStagingDomain() + d.getSingleConfigProd3(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		//get product name, assert mini cart is closed, assert add to cart button exists
		productName = this.fetchText(scpp.getProductName());
		ct.assertExists(header.getClosedMiniCart());
		ct.assertExists(scpp.getAddToCartButton());
	});

	casper.then(function() {
		numConfigOptions = this.getElementsInfo(scpp.getConfigDropdown1SingleOption()).length;
		//this.echo(numConfigOptions);
		randomConfig1Selection = ct.getRandomInt(numConfigOptions, 2);
		//this.echo(randomConfig1Selection);
	});

	casper.then(function() {
		//open first dropdown
		this.click(scpp.getConfigDropdown1Shiv());
	});

	casper.then(function() {
		//get random color's name
		randomConfigColorName = this.fetchText(scpp.getConfigDropdown1SingleOption() + ':nth-child(' + randomConfig1Selection + ') > span:nth-child(2)');
		//this.echo(randomConfigColorName);
	});

	casper.waitForSelector(scpp.getOpenConfig1Dropdown(), function() {
		//wait for dropdown to be opened, select random color
		this.click(scpp.getConfigDropdown1SingleOption() + ':nth-child(' + randomConfig1Selection + ')');
	});

	casper.waitForSelector(scpp.getClosedConfig1Dropdown(), function() {
		//wait for dropdown to close, click add to cart
		this.click(scpp.getAddToCartButton());
	});

	casper.waitForSelector(header.getOpenMiniCart(), function() {
		casper.waitForText('Recently added items', function() {
			this.echo(this.fetchText(header.getMiniCartSuccessMessage()));
		});
	});

	casper.then(function() {
		ct.assertExists(header.getMiniCartProducts() + ':nth-child(1)');
		ct.assertEquals(productName, this.fetchText(header.getMiniCartProducts() + ':nth-child(1) > div > div > p.product-name > a'), 'Product name in mini cart matches product name on page!');
		//ct.assertEquals(productName, this.fetchText(header.getMiniCartProductsName()), 'Product name in mini cart matches product name on page!');
	});

	run.run();
});