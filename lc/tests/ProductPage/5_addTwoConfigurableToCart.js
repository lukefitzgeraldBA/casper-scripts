/*
* Add configurable product with 2 configuration options to cart
*
* @package:	Blueacorn 5_addTwoConfigurableToCart.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-09-04 10:31:50 Blue Acorn, Inc.
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
var cpp = new ConfigurableProductPage();
var header = new Header();

casper.test.begin('Add configurable product to cart, with 2 configuration options', 5, function(test) {
	var productName;
	var randomConfig1Selection;
	var randomConfig2Selection;
	var randomConfigColorName;
	var numConfigOptions;
	var numConfigOptions2;
	casper.options.viewportSize = {width:d.getDesktopBrowserWidth(), height:d.getBrowserHeight()};
	casper.options.waitTimeout = 10000;

	start.startWithCreds(d.getStagingDomain() + d.getConfigProd1(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		//get product name, assert mini cart is closed, assert add to cart button exists
		productName = this.fetchText(cpp.getProductName());
		ct.assertExists(header.getClosedMiniCart());
		ct.assertExists(cpp.getAddToCartButton());
	});

	casper.then(function() {
		numConfigOptions = this.getElementsInfo(cpp.getConfigDropdown1SingleOption()).length;
		//this.echo(numConfigOptions);
		randomConfig1Selection = ct.getRandomInt((numConfigOptions - 3), 2);
		//this.echo(randomConfig1Selection);
		
		numConfigOptions2 = this.getElementsInfo(cpp.getConfigDropdown2SingleOption()).length;
		//this.echo(numConfigOptions2);
		randomConfig2Selection = ct.getRandomInt((numConfigOptions2 - 1), 2);
		//this.echo(randomConfig2Selection);
	});

	casper.then(function() {
		//open first dropdown
		this.click(cpp.getConfigDropdown1Shiv());
	});

	casper.then(function() {
		//get random color's name
		randomConfigColorName = this.fetchText(cpp.getConfigDropdown1SingleOption() + ':nth-child(' + randomConfig1Selection + ') > span:nth-child(2)');
	});

	casper.waitForSelector(cpp.getOpenConfig1Dropdown(), function() {
		//wait for dropdown to be opened, select random color
		this.click(cpp.getConfigDropdown1SingleOption() + ':nth-child(' + randomConfig1Selection + ')');
	});

	casper.waitForSelector(cpp.getClosedConfig1Dropdown(), function() {
		this.click(cpp.getConfigDropdown2Shiv());
	});

	casper.wait(2000);

	casper.waitForSelector(cpp.getOpenConfig2Dropdown(), function() {
		this.click(cpp.getConfigDropdown2SingleOption() + ':nth-child(' + randomConfig2Selection + ')');
	});

	casper.waitForSelector(cpp.getClosedConfig2Dropdown(), function() {
		this.click(cpp.getAddToCartButton());
	});

	casper.wait(2000);

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