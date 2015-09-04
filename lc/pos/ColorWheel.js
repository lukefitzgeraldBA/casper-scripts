/*
* Page object for the color wheel, found on configurable product pages when color is an configurable attribute
*
* @package:	Blueacorn ColorWheel.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 11:10:59 Blue Acorn, Inc.
*/

'use strict';

function ColorWheel() {
	var colorWheel = 'body > div > div > div.main-container.col1-layout > div > div.col-main > div.color-wheel-container > div.color-wheel';
	var colorWheelSelector = 'body > div > div > div.main-container.col1-layout > div > div.col-main > div.color-wheel-container > div.color-wheel-selector.ui-draggable.ui-draggable-handle';
	var colorWheelInner = 'body > div > div > div.main-container.col1-layout > div > div.col-main > div.color-wheel-container > div.color-wheel > div';
	var colorWheelNotAnimating = 'body > div > div > div.main-container.col1-layout > div > div.col-main > div.color-wheel-container > div.color-wheel > div:not(.velocity-animating)';
	var colorSlice = 'body > div > div > div.main-container.col1-layout > div > div.col-main > div.color-wheel-container > div.color-wheel > div > div'; 
	var colorNameDisplay = '#product_addtocart_form > div.product-img-box > div.color-selection';
	var colorDropdownClosed = '#product-options-wrapper > dl > dd:nth-child(2) > div > div.ba-select.ba-select-box.ba-thumbnail';
	var colorDropdownOpen = '#product-options-wrapper > dl > dd:nth-child(2) > div > div.ba-select.ba-select-box.ba-swatch.open';
	var colorDropdownArrow = '#product-options-wrapper > dl > dd:nth-child(2) > div > div.ba-select.ba-select-box.ba-swatch > span > span.ba-arrow';
	var colorDropdownColorOption = '#product-options-wrapper > dl > dd:nth-child(2) > div > div.ba-select.ba-select-box.ba-swatch.open > div > ul > li:nth-child';
	var colorDropdownColor = '#product-options-wrapper > dl > dd:nth-child(2) > div > div.ba-select.ba-select-box.ba-swatch > span > span.ba-color-box';
	var colorDropdownColorName = '#product-options-wrapper > dl > dd:nth-child(2) > div > div.ba-select.ba-select-box.ba-swatch > span > span.ba-shiv-content';

	this.getColorWheel = function() {
		return colorWheel;
	};

	this.getColorWheelSelector = function() {
		return colorWheelSelector;
	};

	this.getColorWheelInner = function() {
		return colorWheelInner;
	};

	this.getColorSlice = function() {
		return colorSlice;
	};

	this.getColorNameDisplay = function() {
		return colorNameDisplay;
	};

	this.getColorDropdownClosed = function() {
		return colorDropdownClosed;
	};

	this.getColorDropdownOpen = function() {
		return colorDropdownOpen;
	};

	this.getColorDropdownArrow = function() {
		return colorDropdownArrow;
	};

	this.getColorDropdownColorOption = function() {
		return colorDropdownColorOption;
	};

	this.getColorDropdownColor = function() {
		return colorDropdownColor;
	};

	this.getColorDropdownColorName = function() {
		return colorDropdownColorName;
	};

	this.getColorWheelNotAnimating = function() {
		return colorWheelNotAnimating;
	};

	this.extractColor = function(element) {
		var color = casper.evaluate(function(x) {
			var item = document.querySelector(x);
			var atts = window.getComputedStyle(item);
			return atts.backgroundColor;
		}, element);
		return color;
	};

	this.extractColorName = function(element) {
		var colorName = casper.evaluate(function(x) {
			var item = document.querySelector(x);
			var atts = item.getAttribute('data-label');
			return atts;
		}, element);
		return colorName;
	};

	this.extractXPos = function(element) {
		var x = casper.evaluate(function(x) {
			var item = document.querySelector(x);
			var pos = item.getBoundingClientRect().left;
			return pos;
		}, element);
		return x;
	};

	this.extractWidth = function(element) {
		var w = casper.evaluate(function(x) {
			var item = document.querySelector(x);
			var pos = item.getBoundingClientRect().width;
			return pos;
		}, element);
		return w;
	};
};
