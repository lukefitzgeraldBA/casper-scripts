/*
* Homepage page object
*
* @package:	Blueacorn HomePage.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-12 13:09:04 Blue Acorn, Inc.
*/


'use strict';

//enables the use of xpath to find selectors
var x = require('casper').selectXPath;

//set screen for better screen shots
casper.options.viewportSize = {width: 1940, height: 1080};

function HomePage() {
	//declare variables
	var URL = 'http://nativesite.dev';
	var heroImagePath = 'body > div > div.page > div.main-container.col1-layout > div > div > div > div > ul > li.cycle-slide.cycle-slide-active';

	//get methods
	this.getURL = function(){
		return URL;
	};

	this.getHeroImgPath = function(){
		return heroImagePath;
	};

};