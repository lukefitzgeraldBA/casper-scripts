/*
* Screenshot utility file
*
* @package:	Blueacorn Screenshot.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-25 10:04:03 Blue Acorn, Inc.
*/

function Screenshot() {
	this.screenshot = function(imgName) {
		casper.then(function() {
			casper.capture('images/' + imgName + '.png');
			//console.log('Picture Taken!');
		});
	};

	this.screenshotSelector = function(imgName, element) {
		casper.then(function() {
			casper.captureSelector('images/' + imgName + '.png', element);
		});
	};

	this.tsScreenshot = function(imgName) {
		casper.then(function() {
			casper.capture('../images' + imgName + '.png');
			//console.log('Picture Taken!');
		});
	};

	this.phantomScreenshot = function(imgName) {
		casper.then(function() {
			casper.capture('images/testimages' + imgName + '.png');
			//console.log('Picture Taken!');
		});
	};
}