/*
* Run all functions from HeaderPage.js
*
* @package:	Blueacorn HeaderTests.js
* @version:	1.0
* @Author: 	Andrew Morales
* @Copyright:	Copyright © 2015-06-29 08:37:17 Blue Acorn, Inc.
*/

'use strict';

//inject JavaScript files
phantom.page.injectJs('../pos/HeaderPage.js');
phantom.page.injectJs('../utilities/start.js');
phantom.page.injectJs('../utilities/Screenshot.js');
phantom.page.injectJs('../data/testData.js');

//instantiate objects
var headerPage = new HeaderPage();
var start = new Start();
var screenshot = new Screenshot();
var tData = new TestData();

casper.test.begin('Run all header tests', 7, function (test) {
	start.start(headerPage.getURL());

	//navigate to a different page
	casper.then(function(){
		this.click(headerPage.getWomenLinkPath());
	});

	//ensure you are liked to the correct page
	casper.then(function(){
		this.test.assertTitle('Women', 'Correctly directed to Womens category');
	});

	//click header logo
	casper.then(function(){
		this.click(headerPage.getPathToLogo());
	});

	//ensure you are directed to the home page
	casper.then(function(){
		this.test.assertTitle('Home page', "Directed to the: " + this.getTitle() + " correctly");
	});

	//navigate to mens category
	casper.then(function(){
		this.click(headerPage.getMenLinkPath());
	});

	//ensure you are liked to the correct page
	casper.then(function(){
		this.test.assertTitle('Men', 'Correctly directed to Mens category');
	});

	//navigate to accessories category
	casper.then(function(){
		this.click(headerPage.getaccessoriesLinkPath());
	});

	//ensure you are liked to the correct page
	casper.then(function(){
		this.test.assertTitle('Accessories', 'Correctly directed to accessories category');
	});

	//navigate to Home & Decor category
	casper.then(function(){
		this.click(headerPage.gethomeAndDecorLinkPath());
	});

	//ensure you are liked to the correct page
	casper.then(function(){
		this.test.assertTitle('Home & Decor', 'Correctly directed to home & decor category');
	});

	//navigate to Sale category
	casper.then(function(){
		this.click(headerPage.getsaleLinkPath());
	});

	//ensure you are liked to the correct page
	casper.then(function(){
		this.test.assertTitle('Sale', 'Correctly directed to sale category');
	});

	//navigate to VIP category
	casper.then(function(){
		this.click(headerPage.getvipLinkPath());
	});

	//ensure you are liked to the correct page
	casper.then(function(){
		this.test.assertTitle('VIP', 'Correctly directed to VIP category');
	});

	casper.run(function() {
		test.done();
	});
});