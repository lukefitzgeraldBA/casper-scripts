/*
* Function to initialize phantomcss
*
* @package:	Blueacorn InitializePhantomCss.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 10:47:19 Blue Acorn, Inc.
*/

'use strict';

function InitializePhantomCss() {
	var phantomcss;
	this.startPhantomCss = function() {
		
		//phantomcss path for test suite testing
		//var path = '../utilities/PhantomCSS/';
		//phantomcss path for local testing
		var path = '../../utilities/PhantomCSS/';
		phantomcss = require( path );


		phantomcss.init({
			
			//rebase: casper.cli.get( "rebase" ),
			// SlimerJS needs explicit knowledge of this Casper, and lots of absolute paths
			casper: casper,
			//phantomcss path for test suite testing
			//libraryRoot: '../utilities/PhantomCSS' ,
			//phantomcss path for local testing
			libraryRoot: '../../utilities/PhantomCSS' ,
			screenshotRoot: 'images' ,
			failedComparisonsRoot: 'images/failures' ,
			addLabelToFailedImage: false,
			comparisonResultRoot: 'images/results',
			/*
			fileNameGetter: function overide_file_naming(){},
			onPass: function passCallback(){},
			onFail: function failCallback(){},
			onTimeout: function timeoutCallback(){},
			onComplete: function completeCallback(){},
			hideElements: '#thing.selector',
			addLabelToFailedImage: true,*/
			mismatchTolerance: 0,
			outputSettings: {
				errorColor: {
					red: 255,
					green: 0,
					blue: 255
				},
				errorType: 'movement',
				transparency: 0.3
			}
		});
	};

	this.takePhantomScreenshot = function(element, delay, hide, fileName) {
		phantomcss.screenshot(element, delay, hide, fileName);
	};

	this.phantomCompareAll = function() {
		phantomcss.compareAll();
	};

	this.phantomCompareSession = function() {
		phantomcss.compareSession();
	};
};