/*
* Search results page object
*
* @package:	Blueacorn SearchPage.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-12 13:09:04 Blue Acorn, Inc.
*/

'use strict';

//enables the use of xpath to find selectors
var x = require('casper').selectXPath;

//set screen for better screen shots
casper.options.viewportSize = {width: 1940, height: 1080};

function SearchPage() {
	//declare variables
	var productTablePath = 'ul.products-grid.products-grid--max-3-col.first.last.odd';
	var failureMsgPath = 'p.note-msg';
	var productInfoPath = 'h2.product-name';
	var failureMsg = 'Your search returns no results.';

	//get methods
	this.getProductTablePath = function(){
		return productTablePath;
	};

	this.getFailureMsgPath = function(){
		return failureMsgPath;
	};

	this.getPathtoProductInfo = function(){
		return productInfoPath;
	};

	this.getFailureMsg = function(){
		return failureMsg;
	};

	//gets the qty of results returned by the search
	this.getListItemCT = function(targetListElement) {
		var CT = casper.evaluate(function() {return document.querySelector('ul.products-grid.products-grid--max-3-col.first.last.odd').childElementCount});
		return CT;
	};

	//gets the qty listed at the top of the table
	this.getTableCT = function() {
		var ct = casper.evaluate(function() {return document.querySelector('p.amount.amount--no-pages').innerText});
		ct = ct.replace(' Item(s)', '');
		return ct;
	};
};