/*
* Test to click product page color wheel, and see if page adjusts like it should
*
* @package:	Blueacorn colorWheelClick.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-08-07 17:08:43 Blue Acorn, Inc.
*/

casper.userAgent('Mozilla/5.0(Macintosh; Intel Mac OS X)')

//local testing
// phantom.injectJs('../../data/Data.js');
// phantom.injectJs('../../utilities/Start.js');
// phantom.injectJs('../../utilities/Run.js');
// phantom.injectJs('../../utilities/Screenshot.js');
// phantom.injectJs('../../utilities/CommonTests.js');
// phantom.injectJs('../../pos/ColorWheel.js');

//product page suite testing
phantom.injectJs('../data/Data.js');
phantom.injectJs('../utilities/Start.js');
phantom.injectJs('../utilities/Run.js');
phantom.injectJs('../utilities/Screenshot.js');
phantom.injectJs('../utilities/CommonTests.js');
phantom.injectJs('../pos/ColorWheel.js');

var d = new Data();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var cw = new ColorWheel();

casper.test.begin('Click on color slice in color wheel', 8, function(test) {
	var totalSlicesCount;
	var numColorsDisplayed;
	var defaultColor;
	var defaultColorName;
	var defaultXPos;
	var width;
	var sliderColor;
	var activeSlice;
	var colorDropdownColor;
	var colorDropdownColorName;
	var randomNum;
	var randomSlice;
	var randomColor;
	var randomColorName;
	var displayedColorNameBgColor;
	var displayedColorName;

	casper.options.viewportSize = {width:1200, height:950};

	start.startWithCreds(d.getStagingDomain() + d.getConfigProd3(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		//count number of slices total, calculate number of slices displayed
		totalSlicesCount = this.getElementsInfo(cw.getColorSlice()).length;
		numColorsDisplayed = totalSlicesCount / 3;
		//extract color displayed by default on page
		defaultColor = cw.extractColor(cw.getColorNameDisplay());
	});

	casper.then(function() {
		//set ct to the first color displayed on screen
		var ct = numColorsDisplayed + 1;
		//loop through all colors displayed, to identify the position of the active color
		this.repeat(numColorsDisplayed, function() {
			//set clr to the first color displayed on screen
			var clr = cw.extractColor(cw.getColorSlice() + ':nth-child(' + ct + ')');
			//loop through all colors displayed, set activeSlice variable equal to position of the default, currently active color 
			if (clr == defaultColor) {
				activeSlice = cw.getColorSlice() + ':nth-child(' + ct + ')';
			}
			ct++;
		});
	});

	casper.then(function() {
		//extract xpos of active slice 
		defaultXPos = cw.extractXPos(activeSlice);
	});

	casper.then(function() {
		randomNum = ct.getRandomInt((numColorsDisplayed * 2), (numColorsDisplayed + 1));
		randomSlice = cw.getColorSlice() + ':nth-child(' + randomNum + ')';
	});

	casper.then(function() {
		//Extract color, color name of random slice selected
		randomColor = cw.extractColor(randomSlice);
		randomColorName = cw.extractColorName(randomSlice);
	});
	
	casper.then(function() {
		//Click randomly selected slice
		this.click(randomSlice);	
	});

	casper.waitForSelector(cw.getColorWheelNotAnimating(), function() {
		//extract slider color
		sliderColor = cw.extractColor(cw.getColorWheelSelector());
		//extract color dropdown color, color name
		colorDropdownColor = cw.extractColor(cw.getColorDropdownColor());
		colorDropdownColorName = this.fetchText(cw.getColorDropdownColorName());
		//extract from the displayed color name the color, color name
		displayedColorNameBgColor = cw.extractColor(cw.getColorNameDisplay());
		displayedColorName = this.fetchText(cw.getColorNameDisplay());
	});

	casper.then(function() {
		//ensure randomly selected slice moves to the correct, active position by comparing colors
		test.assertEquals(randomColor, cw.extractColor(activeSlice), 'Now active color matches the color of the random color selected');
		var diff = Math.abs(defaultXPos - cw.extractXPos(activeSlice));
		if(diff > 10) {
		    this.echo(diff);
		    test.fail('Difference greater than 10px');
		}
		else {
			test.pass('The now active color is in the active color position');
		}
	});

	casper.then(function() {
		//ensure colors changed to match the random color clicked on
		ct.assertEquals(randomColor, sliderColor, 'Slider color matches the random color clicked selected');
		ct.assertEquals(randomColor, colorDropdownColor, 'Color dropdown color matches random color selected');
		ct.assertEquals(randomColor, displayedColorNameBgColor, 'BG color of the color name displayed below slider matches random color selected');
		//ensure text displayed below slider & in dropdown menu changes to random color selected
		ct.assertEquals(randomColorName, colorDropdownColorName, 'Text in color dropdown matches random color selected');
		ct.assertEquals(randomColorName, displayedColorName, 'Text displayed below slider matches random color selected');
	});

	run.run();
});
