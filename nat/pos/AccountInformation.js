/*
* Page object for the customer account information page
*
* @package:	Blueacorn AccountInformation.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-25 12:11:30 Blue Acorn, Inc.
*/

function AccountInformation() {
	var productionUrl = 'http://shopnational.com/customer/account/edit/';
	var stagingUrl = 'http://staging.shopnational.com/customer/account/edit/';
	var qaUrl = 'http://qa.nat.dev/customer/account/edit/';
	var pageTitle = 'Account Information';
	

	this.getProductionUrl = function() {
		return productionUrl;
	};

	this.getStagingUrl = function() {
		return stagingUrl;
	};

	this.getQaUrl = function() {
		return qaUrl;
	};

	this.getPageTitle = function() {
		return pageTitle;
	};

	

}