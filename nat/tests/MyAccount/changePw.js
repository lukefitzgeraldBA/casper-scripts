/*
* Changing a customer's account password
*
* @package:	Blueacorn changePw.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-25 10:45:03 Blue Acorn, Inc.
*/

//relative file paths for test suite testing
//import js files
phantom.page.injectJs('../data/Constants.js');
phantom.page.injectJs('../objects/AccountLogin.js');
phantom.page.injectJs('../objects/AccountDashboard.js');
phantom.page.injectJs('../utilities/Start.js');
phantom.page.injectJs('../utilities/Run.js');
phantom.page.injectJs('../utilities/Screenshot.js');
phantom.page.injectJs('../utilities/CommonTests.js');

/*
//relative file paths for local testing
//import js files
phantom.page.injectJs('../../data/Constants.js');
phantom.page.injectJs('../../objects/AccountLogin.js');
phantom.page.injectJs('../../objects/AccountDashboard.js');
phantom.page.injectJs('../../utilities/Start.js');
phantom.page.injectJs('../../utilities/Run.js');
phantom.page.injectJs('../../utilities/Screenshot.js');
phantom.page.injectJs('../../utilities/CommonTests.js');
*/

//create objects
var c = new Constants();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var acctDash = new AccountDashboard();
var acctInfoChPw = new AccountInformationChangePw();

casper.test.begin('Change User PW', 4, function(test) {
	casper.options.viewportSize = {width:1440, height:950};

	//set xpath variable
	var x = require('casper').selectXPath;
	
	start.start(acctDash.getStagingUrl(), c.getHttpUn(), c.getHttpPw());


	casper.then(function() {
		//confirmation of page load
		ct.testHttpStatus();
		screenshot.screenshot('dash2');
		ct.assertTitle('My Account');
		ct.assertExists(acctDash.getChangePwLinkPath());
	});


	casper.then(function() {
		acctDash.clickChangePwLink();
		screenshot.screenshot('changepw1');
	});


	casper.then(function() {
		//enter old & new pw, save it
		acctInfoChPw.enterCurrentPw(c.getPw());
		acctInfoChPw.enterNewPw(c.getPw());
		acctInfoChPw.enterConfirmPw(c.getPw());
		acctInfoChPw.clickSavePwButton();
	});



	casper.then(function() {
		screenshot.screenshot('changepw2');
		ct.assertExists(acctDash.getSuccessMessageBlockPath());
		this.echo(this.fetchText(acctDash.getSuccessMessageTextPath()));
	});



	//execute test & quit using the run utility
	run.run();
});