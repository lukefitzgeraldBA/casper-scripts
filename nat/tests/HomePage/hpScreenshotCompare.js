/*
* This file runs screenshot comparison tasks for the homepage
*
* @package:	Blueacorn hpScreenshotCompare.js
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

casper.test.begin('PhantomCSS Test', 13, function(test) {
	casper.options.viewportSize = {width:1440, height:950};
	var x = require('casper').selectXPath;
	var fs = require( 'fs' );
	var delay = 20;
	var hide = '';
	phcss.startPhantomCss();

	start.start('http://staging.shopnational.com', 'nat', 'pass4nat');
	ct.testHttpStatus();

	casper.then(function() {
		//take screenshots with phantomcss
		phcss.takePhantomScreenshot(hp.getHeroImagePath(), delay, hide, '1heroImage');
		phcss.takePhantomScreenshot(hp.getBlock1ImagePath(), delay, hide, '2block1');
		phcss.takePhantomScreenshot(hp.getBlock1ButtonPath(), delay, hide, '2block1Button');
		phcss.takePhantomScreenshot(hp.getBlock2ImagePath(), delay, hide, '3block2');		
		phcss.takePhantomScreenshot(hp.getBlock2ButtonPath(), delay, hide, '3block2Button');
		phcss.takePhantomScreenshot(hp.getBlock3ImagePath(), delay, hide, '4block3');
		phcss.takePhantomScreenshot(hp.getBlock3ButtonPath(), delay, hide, '4block3Button');
		phcss.takePhantomScreenshot(hp.getBlock4ImagePath(), delay, hide, '5block4');
		phcss.takePhantomScreenshot(hp.getBlock4ButtonPath(), delay, hide, '5block4Button');
		phcss.takePhantomScreenshot(hp.getBlock5ImagePath(), delay, hide, '6block5');
		phcss.takePhantomScreenshot(hp.getBlock5ButtonPath(), delay, hide, '6block5Button');
	});

	//test hover states of all buttons
	casper.then(function() {
		this.mouse.move(hp.getHeroImageButtonPath());
		phcss.takePhantomScreenshot(hp.getHeroImageButtonPath(), delay, hide, '7heroImageButtonHover');
	});

	//for some reason, the hero image is the only button that I can actually see the hover state on
	//the rest of the tests below do not provide accurate results
	/*
	casper.then(function() {
		this.mouse.move(hp.getBlock1ButtonPath());
		phcss.takePhantomScreenshot(hp.getBlock1ButtonPath(), delay, hide, '8Block1ButtonHover');
	});	

	casper.then(function() {
		this.mouse.move(hp.getBlock2ButtonPath());
		phcss.takePhantomScreenshot(hp.getBlock2ButtonPath(), delay, hide, '9Block2ButtonHover');
	});	

	casper.then(function() {
		this.mouse.move(hp.getBlock3ButtonPath());
		phcss.takePhantomScreenshot(hp.getBlock3ButtonPath(), delay, hide, '10Block3ButtonHover');
	});

	casper.then(function() {
		this.mouse.move(hp.getBlock4ButtonPath());
		phcss.takePhantomScreenshot(hp.getBlock4ButtonPath(), delay, hide, '11Block4ButtonHover');
	});	

	casper.then(function() {
		this.mouse.move(hp.getBlock5ButtonPath());
		phcss.takePhantomScreenshot(hp.getBlock5ButtonPath(), delay, hide, '12Block5ButtonHover');
	});	

	//tested out casper.on event to see if that would activate the hover state on buttons
	casper.on('mouse.move', function() {
		phcss.takePhantomScreenshot(hp.getBlock5ButtonPath(), delay, hide, '13Block1ButtonHover');
	});
	*/

	casper.then(function() {
		phcss.phantomCompareSession();
	});

	run.run();
});
