/*
* Contains 2 start functions, one for accessing a page with an http pw, and the other without it
*
* @package:	Blueacorn Start.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-12 13:09:04 Blue Acorn, Inc.
*/

'use strict';

function Start() {
	this.start = function(url) {
		casper.start(url);
	};

	this.startWithCreds = function(url, httpun, httppw) {
		casper.start(url);
		casper.setHttpAuth(httpun, httppw);
	};
}