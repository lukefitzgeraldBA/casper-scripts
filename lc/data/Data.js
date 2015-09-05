/*
* Data file, containing any data needed for test suite
*
* @package:	Blueacorn Data.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-12 13:09:04 Blue Acorn, Inc.
*/

'use strict';

function Data() {
	var localDomain = 'http://qa.lc.dev/';
	var stagingDomain = 'http://dev.lecreuset.com/';
	var productionDomain = 'http://lecreuset.com/';
	var adminUrl = 'admin';
	var adminSystemConfigUrl = 'admin/system_config';
	var customerAccountLoginUrl = 'customer/account/login'
	var un = 'luke.fitzgerald@blueacorn.com';
	var pw = 'pass4luke';
	var httpUn = 'lcoaadmin';
	var httpPw = 'pass4admin';
	var desktopBrowserWidth = 1200;
	var tabletBrowserWidth = 768;
	var mobileBrowserWidth = 320;
	var browserHeight = 950;
	var configProd1 = 'round-dutch-oven';
	var configProd2 = 'waiters-friend';
	var configProd3 = 'braiser';
	var configProd4 = 'oval-dutch-oven';
	var singleConfigProd1 = 'signature-stainless-steel-knob';
	var singleConfigProd2 = 'revolution-spatula-spoon';
	var singleConfigProd3 = 'zen-kettle';
	var simpleProd1 = 'revolution-potato-masher';
	var simpleProd2 = 'stainless-steel-measuring-spoons';
	var simpleProd3 = 'nonstick-stockpot';
	var fn = 'Luke';
	var ln = 'Fitzgerald';
	var email = 'luke.fitzgerald@blueacorn.com';
	var address = '145 Williman St.';
	var city = 'Charleston';
	var state = 'South Carolina';
	var zip = '29403';
	var country = 'United States';
	var phone = '8779442583';
	var ccNum = '6011111111111117';
	var ccvNum = '123';

	this.getLocalDomain = function() {
		return localDomain;
	};	

	this.getStagingDomain = function() {
		return stagingDomain;
	};	

	this.getProductionDomain = function() {
		return productionDomain;
	};	

	this.getAdmin = function() {
		return adminUrl;
	};	

	this.getAdminSystemConfig = function() {
		return adminSystemConfigUrl;
	};	

	this.getCustomerAccountLoginUrl = function() {
		return customerAccountLoginUrl;
	};

	this.getUn = function() {
		return un;
	};	

	this.getPw = function() {
		return pw;
	};	

	this.getHttpUn = function() {
		return httpUn;
	};

	this.getHttpPw = function() {
		return httpPw;
	};

	this.getDesktopBrowserWidth = function() {
		return desktopBrowserWidth;
	};

	this.getTabletBrowserWidth = function() {
		return tabletBrowserWidth;
	};

	this.getMobileBrowserWidth = function() {
		return mobileBrowserWidth;
	};

	this.getBrowserHeight = function() {
		return browserHeight;
	};

	this.getConfigProd1 = function() {
		return configProd1;
	};

	this.getConfigProd2 = function() {
		return configProd2;
	};

	this.getConfigProd3 = function() {
		return configProd3;
	};

	this.getConfigProd4 = function() {
		return configProd4;
	};

	this.getSingleConfigProd1 = function() {
		return singleConfigProd1;
	};

	this.getSingleConfigProd2 = function() {
		return singleConfigProd2;
	};

	this.getSingleConfigProd3 = function() {
		return singleConfigProd3;
	};

	this.getSimpleProd1 = function() {
		return simpleProd1;
	};

	this.getSimpleProd2 = function() {
		return simpleProd2;
	};

	this.getSimpleProd3 = function() {
		return simpleProd3;
	};

	this.getFn = function() {
		return fn;
	};

	this.getLn = function() {
		return ln;
	};

	this.getEmail = function() {
		return email;
	};

	this.getAddress = function() {
		return address;
	};

	this.getCity = function() {
		return city;
	};

	this.getState = function() {
		return state;
	};

	this.getZip = function() {
		return zip;
	};

	this.getCountry = function() {
		return country;
	};

	this.getPhone = function() {
		return phone;
	};

	this.getCcNum = function() {
		return ccNum;
	};

	this.getCcvNum = function() {
		return ccvNum;
	};
};