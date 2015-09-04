/*
* Page object for the Account Dashboard page
*
* @package:	Blueacorn AccountDashboard.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-25 10:19:41 Blue Acorn, Inc.
*/

function AccountDashboard() {
	var productionUrl = 'http://shopnational.com/customer/account';
	var stagingUrl = 'http://staging.shopnational.com/customer/account';
	var qaUrl = 'http://qa.nat.dev/customer/account';
	var pageTitle = 'My Account';
	var editContactInfoLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div.my-account > div > div:nth-child(3) > div.col2-set > div.col-1 > div > div.box-title > a';
	var editNewslettersLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div.my-account > div > div:nth-child(3) > div.col2-set > div.col-2 > div > div.box-title > a';
	var changePwLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div.my-account > div > div:nth-child(3) > div.col2-set > div.col-1 > div > div.box-content > p > a';
	var manageAddressesLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div.my-account > div > div:nth-child(4) > div.box-head > a';
	var editDefaultBillingAddressLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div.my-account > div > div:nth-child(4) > div.col2-set > div.col-1 > div > div.box-title > a';
	var editDefaultShippingAddressLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div.my-account > div > div:nth-child(4) > div.col2-set > div.col-2 > div > div.box-title > a';
	var successMessageBlockPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div.my-account > div > ul > li';
	var successMessageTextPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div.my-account > div > ul > li > ul > li > span';

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

	this.getChangePwLinkPath = function() {
		return changePwLinkPath;
	};

	this.getSuccessMessageBlockPath = function() {
		return successMessageBlockPath;
	};

	this.getSuccessMessageTextPath = function() {
		return successMessageTextPath;
	};

	this.clickEditContactInfoLink = function() {
		casper.then(function() {
			casper.click(editContactInfoLinkPath);
		});
	};

	this.clickEditNewslettersLink = function() {
		casper.then(function() {
			casper.click(editNewslettersLinkPath)
		});
	};

	this.clickChangePwLink = function() {
		casper.then(function() {
			casper.click(changePwLinkPath);
		});
	};

	this.clickManageAddressesLink = function() {
		casper.then(function() {
			casper.click(manageAddressLinkPath);
		});
	};

	this.clickEditDefaultBillingAddressLink = function() {
		casper.then(function() {
			casper.click(editDefaultBillingAddressLinkPath);
		});
	};
	
	this.clickEditDefaultShippingAddressLink = function() {
		casper.then(function() {
			casper.click(editDefaultShippingAddressLinkPath);
		});
	};
}