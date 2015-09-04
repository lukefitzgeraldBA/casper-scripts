/*
* Run all functions from SearchPage.js
*
* @package:	Blueacorn SearchTests.js
* @version:	1.0
* @Author: 	Andrew Morales
* @Copyright:	Copyright © 2015-06-22 15:57:45 Blue Acorn, Inc.
*/

'use strict';

//import JS files
phantom.page.injectJs('../pos/SearchPage.js');
phantom.page.injectJs('../pos/HeaderPage.js');
phantom.page.injectJs('../utilities/Screenshot.js');
phantom.page.injectJs('../utilities/start.js');
phantom.page.injectJs('../data/testData.js');

//declare variables
var HeaderPage = new HeaderPage();
var searchPage = new SearchPage();
var start = new Start();
var screenshot = new Screenshot();
var tData = new TestData();

var productCT;

casper.test.begin("Run all search tests", 3, function (test) {
	start.start('http://nativesite.dev/');

	//click search without entering any search terms
	casper.then(function(){
		HeaderPage.EnterSearchTerms();
	});

	//ensure the appropriate validation message is retured
	casper.then(function(){
		screenshot.screenshot('searchValidation');
		this.test.assertTextExists('This is a required field.', "Required field validation message correctly appears.");
	});

	//enter search terms
	casper.then(function() {
		HeaderPage.EnterSearchTerms(tData.getSearchTerms());
	});

	//determine how many products are in the list
	casper.waitForSelector(searchPage.getProductTablePath(), function() {
		productCT = searchPage.getListItemCT(searchPage.getProductTablePath());
	});

	//check if the amount listed above the table matches the total products
	//Does not work in native magento because the qty listed does not match the amount of products
	casper.then(function() {
		if(productCT != searchPage.getTableCT())
			this.test.fail('Products listed on table are not equal to qty dispalyed at the top of the table');
		else
			this.test.pass('Products listed matches qty dispalyed at the top of the table');
	});

	//go back to home page
	casper.then(function() {
		this.back();
	});

	//enter invalid search terms
	//this search should not return any results
	casper.then(function() {
		HeaderPage.EnterSearchTerms(tData.getInvalidSearchTerms());
	});

	//ensure no results were returned
	casper.waitForSelector(searchPage.getFailureMsgPath(), function(){
		this.test.assertTextExists(searchPage.getFailureMsg(), 'No results were returned for the invalid search terms');
	});

	casper.run(function() {
		test.done();
	});
});