/*
* Page Object for the admin system config 
*
* @package:	Blueacorn AdminSystemConfig.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-08-10 14:56:44 Blue Acorn, Inc.
*/

'use strict';

function AdminSystemConfig() {
	var baSystemConfigBlock = '#system_config_tabs > li.system-config-blueacorn';
	var baSystemConfigOptions = '#system_config_tabs > li.system-config-blueacorn > dl > dd';
	var adminColorGridRow = '#row_blueacorn_explorebycolor_settings_color_settings > td.value > div > table > tbody > tr';
	//var adminColorGroup = '#row_blueacorn_explorebycolor_settings_color_settings > td.value > div > table > tbody > tr > td:nth-child(2)';
	var numColors = 0;
	var numCurrentColors = 0;
	var numExclusiveColors = 0;
	var numRetiredColors = 0;

	this.getBaBlock = function() {
		return baSystemConfigBlock;
	};

	this.getBaSystemConfigOptions = function() {
		return baSystemConfigOptions;
	};

	this.getAdminColorGridRow = function() {
		return adminColorGridRow;
	};

	this.getNumColors = function() {
		return numColors;
	};

	this.setNumColors = function(num) {
		numColors = num;
	};

	this.getNumCurrentColors = function() {
		return numCurrentColors;
	};

	this.setNumCurrentColors = function(num) {
		numCurrentColors = num;
	};

	this.getNumExclusiveColors = function() {
		return numExclusiveColors;
	};

	this.setNumExclusiveColors = function(num) {
		numExclusiveColors = num;
	};

	this.getNumRetiredColors = function() {
		return numRetiredColors;
	};

	this.setNumRetiredColors = function(num) {
		numRetiredColors = num;
	};

	this.extractSelected = function(element) {
		var colorGroup = casper.evaluate(function(x) {
			var item = document.querySelector(x);
			var atts = item.getAttribute('selected');
			return atts;
		}, element);
		return colorGroup;
	};

	this.extractName= function(element) {
		var colorName = casper.evaluate(function(x) {
			var item = document.querySelector(x).text;
			return item;
		}, element);
		return colorName;
	};

	this.extractValue= function(element) {
		var colorValue = casper.evaluate(function(x) {
			var item = document.querySelector(x).value;
			return item;
		}, element);
		return colorValue;
	};
};