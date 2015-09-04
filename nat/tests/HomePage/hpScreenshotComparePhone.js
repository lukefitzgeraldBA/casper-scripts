/*
* This file runs screenshot comparison tasks for the homepage
*
* @package:	Blueacorn hpScreenshotComparePhone.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-26 08:11:00 Blue Acorn, Inc.
*/

//relative files paths for local testing
//import js files
phantom.page.injectJs('../../data/Constants.js');
phantom.page.injectJs('../../utilities/Start.js');
phantom.page.injectJs('../../utilities/Run.js');
phantom.page.injectJs('../../utilities/Screenshot.js');
phantom.page.injectJs('../../utilities/CommonTests.js');
phantom.page.injectJs('../../utilities/InitializePhantomCss.js')
phantom.page.injectJs('../../objects/HomePage.js');
/*
	Quick screenshot test to make sure National Wholesale is up and running
*/
//casper.userAgent('Mozilla/5.0(Macintosh; Intel Mac OS X)');
/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory
*/

var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var phcss = new InitializePhantomCss();
var hp = new HomePage();

casper.test.begin('PhantomCSS Test', 8, function(test) {
	casper.options.viewportSize = {width:320, height:950};
	var x = require('casper').selectXPath;
	var fs = require( 'fs' );
	var delay = 20;
	var hide = '';
	phcss.startPhantomCss();

	start.start('http://staging.shopnational.com', 'nat', 'pass4nat');
	ct.testHttpStatus();

	casper.then(function() {
		//screenshot.screenshot('fullpagephone');
		
		//take screenshots with phantomcss
		phcss.takePhantomScreenshot(hp.getMobileHeroImagePath(), delay, hide, '1heroImagePhone');
		phcss.takePhantomScreenshot(hp.getMobileHeroContentPath(), delay, hide, '1heroImageContentPhone');
		phcss.takePhantomScreenshot(hp.getMobileBlock1ImagePath(), delay, hide, '2block1ImagePhone');
		phcss.takePhantomScreenshot(hp.getMobileBlock1ContentPath(), delay, hide, '2block1tContentPhone');
		phcss.takePhantomScreenshot(hp.getMobileBlock1CtaPath(), delay, hide, '2block1CtaPhone');
		phcss.takePhantomScreenshot(hp.getPopCatHeadingPath(), delay, hide, '4popCatHeadingPhone');

		//this does not render properly
		//phcss.takePhantomScreenshot(hp.getPopCatBlockPath(), delay, hide, '4popCatBlockPhone');
	});

	casper.then(function() {
		phcss.phantomCompareSession();
	});

	run.run();
});
