/*
* Page Object for the Account Information page, with Change PW selected
*
* @package:	Blueacorn AccountInformationChangePw.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-24 09:57:07 Blue Acorn, Inc.
*/

function AccountInformationChangePw() {
	var productionUrl = 'http://shopnational.com/customer/account/edit/changepass/1/';
	var stagingUrl = 'http://staging.shopnational.com/customer/account/edit/changepass/1/';
	var qaUrl = 'http://qa.nat.dev/customer/account/edit/changepass/1/';
	var pageTitle = 'Account Information';
	var currentPwFieldPath = '#current_password';
	var newPwFieldPath = '#password';
	var confirmPwFieldPath = '#confirmation';
	var saveNewPwButtonPath = '#form-validate > div.buttons-set > button';

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
	
	this.getCurrentPwFieldPath = function() {
		return currentPwFieldPath;
	};

	this.getNewPwFieldPath = function() {
		return newPwFieldPath;
	};

	this.getConfirmPwFieldPath = function() {
		return confirmPwFieldPath;
	};

	this.enterCurrentPw = function(cpw) {
		casper.then(function() {
			casper.sendKeys(currentPwFieldPath, cpw);
		});
	};

	this.enterNewPw = function(npw) {
		casper.then(function() {
			casper.sendKeys(newPwFieldPath, npw);
		});
	};

	this.enterConfirmPw = function(confirmpw) {
		casper.then(function() {
			casper.sendKeys(confirmPwFieldPath, confirmpw);
		});
	};

	this.clickSavePwButton = function() {
		casper.then(function() {
			casper.click(saveNewPwButtonPath);
		});
	};

}