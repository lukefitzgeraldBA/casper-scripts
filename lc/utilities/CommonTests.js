/*
* File containing commonly run tests / assertions
*
* @package:	Blueacorn CommonTests.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 10:43:45 Blue Acorn, Inc.
*/

'use strict';

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

	this.assertDoesntExist = function(element, successMessage) {
		casper.then(function() {
			casper.test.assertDoesntExist(element, successMessage);
		});
	};

	this.assertVisible = function(element) {
		casper.then(function() {
			casper.test.assertVisible(element, 'Element is visible');
		});
	};

	this.assertEquals = function(firstEle, secondEle, successMessage) {
		casper.then(function() {
			casper.test.assertEquals(firstEle, secondEle, successMessage);
		});
	};

	this.getRandomInt = function(max, min) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	this.assertUrlMatch = function(expectedUrl, successMessage) {
		casper.then(function() {
			casper.test.assertUrlMatch(expectedUrl, successMessage);
		});
	};

	this.clearCookies = function() {
		phantom.clearCookies();
	};
}