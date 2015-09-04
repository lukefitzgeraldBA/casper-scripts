/*
* Test script for homepage
*
* @package:	Blueacorn homepage.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-25 08:21:36 Blue Acorn, Inc.
*/

//relative files paths for local testing
//import js files
phantom.page.injectJs('../../data/Constants.js');
phantom.page.injectJs('../../utilities/Start.js');
phantom.page.injectJs('../../utilities/Run.js');
phantom.page.injectJs('../../utilities/Screenshot.js');
phantom.page.injectJs('../../utilities/CommonTests.js');
phantom.page.injectJs('../../objects/HomePage.js');

//create objects
var c = new Constants();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var homepage = new HomePage();

casper.test.begin('Homepage', 1, function(test) {
	casper.options.viewportSize = {width:1440, height:950};

	//set xpath variable
	var x = require('casper').selectXPath;

	//start casper, pass url and http creds
	start.start(homepage.getStagingUrl(), c.getHttpUn(), c.getHttpPw());

	//confirmation of page load
	ct.testHttpStatus();

	screenshot.screenshot('hp');

	//execute test & quit using the run utility
	run.run();
});