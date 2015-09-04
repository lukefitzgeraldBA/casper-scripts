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
};