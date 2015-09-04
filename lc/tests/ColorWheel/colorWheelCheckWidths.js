/*
* Test to click product page color wheel, and see if page adjusts like it should
*
* @package:	Blueacorn colorWheelCheckWidths.js
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

casper.test.begin('Check widths of all slices in color wheel', function(test) {
	var totalSlicesCount;
	var numColorsDisplayed;
	var lastSlice;
	var width;

	casper.options.viewportSize = {width:1200, height:950};

	start.startWithCreds(d.getStagingDomain() + d.getConfigProd1(), d.getHttpUn(), d.getHttpPw());
	ct.testHttpStatus();

	casper.then(function() {
		//count number of slices total, calculate number of slices displayed
		totalSlicesCount = this.getElementsInfo(cw.getColorSlice()).length;
		numColorsDisplayed = totalSlicesCount / 3;
	});

	casper.then(function() {
		//set ct to the first color displayed on screen
		var ct = 1;

		this.repeat(totalSlicesCount, function() {
			//loop through all colors in color wheel, making sure their widths match
			if (ct != totalSlicesCount) {
				var diff = Math.abs((cw.extractWidth(cw.getColorSlice() + ':nth-child(' + ct + ')')) - (cw.extractWidth(cw.getColorSlice() + ':nth-child(' + (ct+1) + ')')));
				if(diff > .5) {
				    this.echo(diff);
				    test.fail('Difference greater than .5');
				}
				else {
					test.pass('Widths match!');
				}
			}
			else {
				var diff = Math.abs((cw.extractWidth(cw.getColorSlice() + ':nth-child(' + ct + ')')) - (cw.extractWidth(cw.getColorSlice() + ':nth-child(' + (ct-1) + ')')));
				if(diff > .5) {
				    this.echo(diff);
				    test.fail('Difference greater than .5');
				}
				else {
					test.pass('Widths match!');
				}
			}
			ct++;
		});
	});

	run.run();
});
