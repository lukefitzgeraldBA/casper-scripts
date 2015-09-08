/*
* Order Sucess page object 
*
* @package:	Blueacorn OrderSuccessPage.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-09-05 11:41:25 Blue Acorn, Inc.
*/

'use strict';

function OrderSuccessPage() {
	var url = 'checkout/onepage/success';
	var heading = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > h2';
	var orderNum = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > p:nth-child(4)';
	var orderTotal = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > div.summary > div > div.final-total';
	var continueShoppingButton = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > div.buttons-set > button';


	this.getUrl = function() {
		return url;
	};

	this.getHeading = function() {
		return heading;
	};

	this.getOrderNum = function() {
		return orderNum;
	};

	this.getOrderTotal = function() {
		return orderTotal;
	};

	this.getContinueShoppingButton = function() {
		return continueShoppingButton;
	};
};