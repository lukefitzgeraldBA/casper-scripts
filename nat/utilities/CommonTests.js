/*
* JS file containing commonly used assertions 
*
* @package:	Blueacorn CommonTests.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-24 09:57:07 Blue Acorn, Inc.
*/

function CommonTests() {
	this.testHttpStatus = function() {
		casper.then(function() {
			casper.test.assertHttpStatus(200);
		});
	};

	this.assertTitle = function(title) {
		casper.then(function() {
			casper.test.assertTitle(title, 'Title is correct');
		});
	};

	this.assertExists = function(element) {
		casper.then(function() {
			casper.test.assertExists(element, 'Element exists');
		});
	};

	this.assertVisible = function(element) {
		casper.then(function() {
			casper.test.assertVisible(element, 'Element is visible');
		});
	};
}