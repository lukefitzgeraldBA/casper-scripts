/*
* Run utility file
*
* @package:	Blueacorn Run.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 10:44:25 Blue Acorn, Inc.
*/

'use strict';

function Run() {
	this.run = function() {
		casper.run(function() {
			casper.test.done();
		});
	};
}