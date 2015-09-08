/*
* After add to cart tests, complete checkout 
*
* @package:	Blueacorn 6_completeCheckout.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-09-04 13:12:42 Blue Acorn, Inc.
*/

'use strict';

casper.userAgent('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1')

//local testing
phantom.injectJs('../../data/Data.js');
phantom.injectJs('../../utilities/Start.js');
phantom.injectJs('../../utilities/Run.js');
phantom.injectJs('../../utilities/Screenshot.js');
phantom.injectJs('../../utilities/CommonTests.js');
phantom.injectJs('../../pos/SimpleProductPage.js');
phantom.injectJs('../../pos/Checkout.js');
phantom.injectJs('../../pos/Header.js');
phantom.injectJs('../../pos/OrderSuccessPage.js');

//product page suite testing
/*phantom.injectJs('../data/Data.js');
phantom.injectJs('../utilities/Start.js');
phantom.injectJs('../utilities/Run.js');
phantom.injectJs('../utilities/Screenshot.js');
phantom.injectJs('../utilities/CommonTests.js');
phantom.injectJs('../pos/SimpleProductPage.js');
phantom.injectJs('../pos/Checkout.js');
phantom.injectJs('../pos/Header.js');
phantom.injectJs('../pos/OrderSuccessPage.js');*/

var d = new Data();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var checkout = new Checkout();
var spp = new SimpleProductPage();
var header = new Header();
var osp = new OrderSuccessPage();

casper.test.begin('Add simple product to cart', 13, function(test) {
	var productName;
	var orderNum;
	casper.options.viewportSize = {width:d.getDesktopBrowserWidth(), height:d.getBrowserHeight()};
	casper.options.waitTimeout = 10000;

	//start.startWithCreds(d.getStagingDomain() + checkout.getUrl(), d.getHttpUn(), d.getHttpPw());
	start.startWithCreds(d.getStagingDomain() + d.getSimpleProd3(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	//starting on product page for testing purposes only
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
		
		//advance to checkout
		this.click(header.getMiniCartCheckoutButton());
	});

	casper.wait(1000);

	casper.waitUntilVisible(checkout.getCheckoutHeading(), function() {
		this.click(checkout.getGuestCheckoutButton());
	});

	//start of checkout page testing
	casper.then(function() {
		//click guest checkout button
		this.click(checkout.getGuestCheckoutButton());
	});

	casper.waitUntilVisible(checkout.getBillingStepTitle(), function() {
		ct.assertVisible(checkout.getBillingForm());
		
		//once form is visible, fill it out
		this.sendKeys(checkout.getBillingFirstName(), d.getFn());
		this.sendKeys(checkout.getBillingLastName(), d.getLn());
		this.sendKeys(checkout.getBillingEmail(), d.getEmail());
		this.sendKeys(checkout.getBillingAddress(), d.getAddress());
		this.sendKeys(checkout.getBillingCity(), d.getCity());
		this.sendKeys(checkout.getBillingZip(), d.getZip());
		this.sendKeys(checkout.getBillingPhone(), d.getPhone());

		this.evaluate(function() {
			$('billing:region_id').value = 54;
		});
	});

	casper.then(function() {
		//assert ship to this address radio button is checked (default)
		ct.assertExists(checkout.getBillingShipToThisAddressRadioButtonLabel() + '.checked');
		ct.assertExists(checkout.getBillingShipToAnotherAddressRadioButtonLabel() + ':not(.checked)');
	});

	casper.then(function() {
		this.click(checkout.getBillingContinueButton());
	});

	casper.waitUntilVisible(checkout.getShippingMethodSubheading(), function() {
		//assert shipping methods form is displayed
		ct.assertVisible(checkout.getShippingMethodForm());

		//assert first shipping method radio button is checked (default)
		ct.assertExists(checkout.getShippingMethodRadioButtonLabel() + '.checked');
	});

	casper.then(function() {
		this.click(checkout.getShippingMethodContinueButton());
	});

	casper.waitUntilVisible(checkout.getPaymentInfoForm(), function() {
		//assert payment info form is visible
		ct.assertVisible(checkout.getPaymentInfoForm());

		//assert first payment option (braintree) is selected (default)
		ct.assertExists(checkout.getPaymentOptionLabel() + '.checked');

		//fill out CC form
		this.sendKeys(checkout.getCcNum(), d.getCcNum());
		this.sendKeys(checkout.getCcvNum(), d.getCcvNum());

		//entire cc expiration date
		this.evaluate(function() {
			$('#braintree_expiration').value = d.getCCExpMonth;
		});

		this.evaluate(function() {
			$('#braintree_expiration_yr').value = d.getCCExpYear;
		});
	});

	//casper.wait(5000);

	casper.then(function() {
		this.click(checkout.getPaymentInfoContinueButton());
	});

	casper.wait(1000);

	casper.waitUntilVisible(checkout.getOrderReviewBlock(), function() {
		//assert order review table is displayed
		ct.assertVisible(checkout.getOrderReviewBlock());
	});

	//this scroll was for testing purposes only
	casper.then(function() {
		//scroll down page, just to see what is happening
		this.scrollTo(0, 500);
	});

	casper.then(function() {
		this.click(checkout.getSubmitOrderButton());
	});

	casper.wait(5000);

	//
	//Order Success Page tests
	//

	casper.waitUntilVisible(osp.getHeading(), function() {
		casper.waitForText('THANK YOU FOR YOUR PURCHASE!', function() {
			this.echo(this.fetchText(osp.getOrderNum()));
			orderNum = this.fetchText(osp.getOrderNum());
		});
	});

	casper.wait(5000);

	ct.clearCookies();

	run.run();
});