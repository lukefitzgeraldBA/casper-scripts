/* 
* Common function for taking screen shots
*
* @package:	Blueacorn Screenshot.js
* @version:	1.0
* @Author: 	Andrew Morales
* @Copyright:	Copyright © 2015-06-22 13:21:53 Blue Acorn, Inc.	 
*/

'use strict';

function Screenshot() {
	this.screenshot = function(imgName) {
		casper.then(function() {
			casper.capture('images/' + imgName + '.png');
		});
	};
}