/*
* Header page object
*
* @package:	Blueacorn Header.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 10:29:24 Blue Acorn, Inc.
*/


'use strict';

//enables the use of xpath to find selectors
var x = require('casper').selectXPath;

//set screen for better screen shots
casper.options.viewportSize = {width: 1940, height: 1080};

function HeaderPage() {
	//declare variables
	var URL = 'http://nativesite.dev';
	var pathToLogo = x('//*[@id="header"]/div/a/img[1]');
	var womenLinkPath = x('//*[@id="nav"]/ol/li[1]/a');
	var menLinkPath = x('//*[@id="nav"]/ol/li[2]/a');
	var accessoriesLinkPath = x('//*[@id="nav"]/ol/li[3]/a');
	var homeAndDecorLinkPath = x('//*[@id="nav"]/ol/li[4]/a');
	var saleLinkPath = x('//*[@id="nav"]/ol/li[5]/a');
	var vipLinkPath = x('//*[@id="nav"]/ol/li[6]/a');

	var searchFieldPath = 'input.input-text.required-entry';
	var searchButtonPath =  'button.button.search-button';

	//get methods
	this.getURL = function(){
		return URL;
	};

	this.getPathToLogo = function(){
		return pathToLogo;
	};

	this.getWomenLinkPath = function(){
		return womenLinkPath;
	};

	this.getMenLinkPath = function(){
		return menLinkPath;
	};

	this.getaccessoriesLinkPath = function(){
		return accessoriesLinkPath;
	};

	this.gethomeAndDecorLinkPath = function(){
		return homeAndDecorLinkPath;
	};

	this.getsaleLinkPath = function(){
		return saleLinkPath;
	};

	this.getvipLinkPath = function(){
		return vipLinkPath;
	};

	this.EnterSearchTerms = function(searchTerms) {
		//enter terms in search field
		casper.sendKeys(searchFieldPath, searchTerms);
		casper.click(searchButtonPath);
	};
};