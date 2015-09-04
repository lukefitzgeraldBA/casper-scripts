/*
* Test to select color option in color menu dropdown, and see if page adjusts like it should
*
* @package:	Blueacorn colorWheelChangeColorInDropdown.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-08-07 17:08:43 Blue Acorn, Inc.
*/

casper.userAgent('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1')

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

casper.test.begin('Change color in dropdown', 7, function(test) {
	var totalSlicesCount;
	var numColors;
	var defaultColor;
	var activeSlice;
	var defaultXPos;
	var randomColorOption;
	var randomColorOptionColor;
	var randomColorOptionColorName;
	var randomColorOptionColorPath;
	var randomColorOptionColorNamePath;
	var option;
	var sliderColor;
	var displayedColorNameBgColor;
	var displayedColorName;

	casper.options.viewportSize = {width:1200, height:950};

	start.startWithCreds(d.getStagingDomain() + d.getConfigProd3(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		//count number of slices total, calculate number of slices displayed
		totalSlicesCount = this.getElementsInfo(cw.getColorSlice()).length;
		numColors = totalSlicesCount / 3;
		//extract color displayed by default on page
		defaultColor = cw.extractColor(cw.getColorNameDisplay());
	});

	casper.then(function() {
		//set ct to the first color displayed on screen
		var ct = numColors + 1;
		//loop through all colors displayed, to identify the position of the active color
		this.repeat(numColors, function() {
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
		randomNum = ct.getRandomInt((numColors + 1), (3));
		randomColorOption = cw.getColorDropdownColorOption() + '(' + randomNum + ')';
	});

	casper.then(function() {
		randomColorOptionColorPath = randomColorOption + ' > span.ba-color-box';
		randomColorOptionColorNamePath = randomColorOption + ' > span.ba-opt-content';
	});

	casper.then(function() {
		//Open color dropdown
		this.click(cw.getColorDropdownArrow());
	});

	casper.then(function() {
		//test to make sure color dropdown menu is open
		test.assertExists(cw.getColorDropdownOpen(), 'Color dropdown menu is open');
	});

	casper.then(function() {
		//extract color name, color of color randomly selected	
		randomColorOptionColor = cw.extractColor(randomColorOptionColorPath);
		randomColorOptionColorName = this.fetchText(randomColorOptionColorNamePath);
	});

	casper.then(function() {
		//select random color option in dropdown
		this.click(randomColorOption);
	});

	casper.waitForSelector(cw.getColorWheelNotAnimating(), function() {
		//extract slider color
		sliderColor = cw.extractColor(cw.getColorWheelSelector());
		//extract from the displayed color name the color, color name
		displayedColorNameBgColor = cw.extractColor(cw.getColorNameDisplay());
		displayedColorName = this.fetchText(cw.getColorNameDisplay());
	});

	casper.then(function() {
		//ensure randomly selected slice moves to the correct, active position by comparing colors
		test.assertEquals(randomColorOptionColor, cw.extractColor(activeSlice), 'Now active color matches the color of the random color selected');
		// this.echo(defaultXPos);
		// this.echo(cw.extractXPos(activeSlice));
		// this.echo(cw.extractXPos('body > div.wrapper > div > div.main-container.col1-layout > div > div > div.color-wheel-container > div.color-wheel > div > div:nth-child(31)'));
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
		test.assertEquals(randomColorOptionColor, sliderColor, 'Color of slider matches color selected in dropdown');
		test.assertEquals(randomColorOptionColorName, displayedColorName, 'Color name displayed under slider matches color selected in dropdown');
		test.assertEquals(randomColorOptionColor, displayedColorNameBgColor, 'BG color of color name displayed under slider matches color selected in dropdown');
	});

	run.run();
});
