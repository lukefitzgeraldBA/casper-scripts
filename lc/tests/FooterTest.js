/*
* Run all functions from FooterPage.js
*
* @package:	Blueacorn FooterTest.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright © 2015-06-26 13:44:42 Blue Acorn, Inc.
*/

'use strict';

//Instantiate page objects
phantom.page.injectJs('../pos/FooterPage.js');
phantom.page.injectJs('../utilities/start.js');
phantom.page.injectJs('../utilities/Screenshot.js');
phantom.page.injectJs('../data/testData.js');
phantom.page.injectJs('../utilities/chancejs/chance.js');

var footerPage = new FooterPage();
var start = new Start();
var screenshot = new Screenshot();
var tData = new TestData();
var chance = new Chance();

casper.test.begin('Run all footer tests', 2, function(test) {
	start.start(footerPage.getURL());

	//attempt to subscribe to the newsletter without providing a email address
	footerPage.subscribe();

	//ensure the proper validation message is displayed
	casper.waitForSelector(footerPage.getValidationPath(), function(){
		this.test.assertTextExists('This is a required field', "Empty email validation message returned");
	});

	//successfully subscribe to the news letter
	footerPage.fillOutNewsLetterEmail(chance.email());
	footerPage.subscribe();

	//ensure the correct message is returned
	casper.then(function(){
		this.test.assertTextExists('Thank you for your subscription.', 'Subscription success message returned');
	})

	casper.run(function() {
		test.done();
	});
});