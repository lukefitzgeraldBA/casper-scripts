/*
* Run utility file
*
* @package:	Blueacorn Run.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-24 09:57:07 Blue Acorn, Inc.
*/

function Run() {
	this.run = function() {
		casper.run(function() {
			casper.test.done();
		});
	};
}