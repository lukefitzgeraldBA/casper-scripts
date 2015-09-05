/*
* My Wishlists page object in customer account 
*
* @package:	Blueacorn MyWishlists.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-09-04 11:53:07 Blue Acorn, Inc.
*/

'use strict';

function MyWishlists() {
	var successMessage = 'body > div.wrapper > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > ul > li > ul > li > span';

	this.getSuccessMessage = function() {
		return successMessage;
	};	
};