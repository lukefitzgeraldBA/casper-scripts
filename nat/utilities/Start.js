/*
* Start utility file
*
* @package:	Blueacorn Start.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-24 09:57:07 Blue Acorn, Inc.
*/

function Start() {
	this.start = function(url) {
		casper.start(url);
	};

	this.startWithCreds = function(url, httpun, httppw) {
		casper.start(url);
		casper.setHttpAuth(httpun, httppw);
	};
}