/*
* Logging into customer account
*
* @package:	Blueacorn accountLogin.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-25 11:44:07 Blue Acorn, Inc.
*/


/*
//relative file paths for test suite testing
//import js files
phantom.page.injectJs('../data/Constants.js');
phantom.page.injectJs('../objects/AccountLogin.js');
phantom.page.injectJs('../objects/AccountDashboard.js');
phantom.page.injectJs('../utilities/Start.js');
phantom.page.injectJs('../utilities/Run.js');
phantom.page.injectJs('../utilities/Screenshot.js');
phantom.page.injectJs('../utilities/CommonTests.js');
*/

//relative file paths for local testing
//import js files
phantom.page.injectJs('../../data/Constants.js');
phantom.page.injectJs('../../objects/AccountLogin.js');
phantom.page.injectJs('../../objects/AccountDashboard.js');
phantom.page.injectJs('../../utilities/Start.js');
phantom.page.injectJs('../../utilities/Run.js');
phantom.page.injectJs('../../utilities/Screenshot.js');
phantom.page.injectJs('../../utilities/CommonTests.js');


//create objects
var c = new Constants();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var loginPage = new AccountLogin();
var acctDash = new AccountDashboard();

casper.test.begin('Account Login', 5, function(test) {
	casper.options.viewportSize = {width:1440, height:950};

	//set xpath variable
	var x = require('casper').selectXPath;

	//start casper, pass url and http creds
	start.start(loginPage.getStagingUrl(), c.getHttpUn(), c.getHttpPw());

	casper.then(function() {
		//confirmation of page load
		ct.testHttpStatus();

		//run a few basic tests
		ct.assertTitle('Customer Login');
		ct.assertExists(loginPage.getLoginButtonPath());
		ct.assertVisible(loginPage.getEmailFieldPath());
		ct.assertVisible(loginPage.getPwFieldPath());
	});

	/***********************************************

					Login - Format 1

	************************************************/

	/*
	//Login - format 1
	//send keys
	casper.then(function() {
		casper.sendKeys(loginPage.getEmailFieldPath(), c.getUn());
		casper.sendKeys(loginPage.getPwFieldPath(), c.getPw());
	});

	//click login button
	casper.then(function() {
		casper.click(loginPage.getLoginButtonPath());
	});
	
	/***********************************************

					Login - Format 2

	************************************************/

	
	//Login - format 2a
	loginPage.enterUn(c.getUn());
	loginPage.enterPw(c.getPw());
	
	/*
	//Login - format 2b
	casper.then(function() {
		//send keys
		loginPage.enterUn2(c.getUn());
		loginPage.enterPw2(c.getPw());
	});
	*/

	casper.then(function() {
		//click login button 2, dont return page object
		loginPage.clickLoginButton2();
	});

	casper.then(function() {
		//screenshot of successful login page
		screenshot.screenshot('dashboard1');
	
		//click change pw link on dashboard page
		acctDash.clickChangePwLink();
		screenshot.screenshot('dashboard2');
	});

	//execute test & quit using the run utility
	run.run();
});