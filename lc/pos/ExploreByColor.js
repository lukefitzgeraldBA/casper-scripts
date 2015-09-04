/*
* Page object for explore by color feature
*
* @package:	Blueacorn ExploreByColor.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-08-23 15:35:12 Blue Acorn, Inc.
*/

'use strict';

function ExploreByColor() {
	var homepageColorBlock = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage';
	// var homepageCurrentColors = '#current';
	// var homepageExclusiveColors = '#exclusive';
	// var homepageArchivedColors = '#archived';
	var homepageSingleCurrentColorBlock = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div > div > div > ul > div > div > div:nth-child(1) > li > ul > li';
	var homepageSingleExclusiveColorBlock = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div > div > div > ul > div > div > div:nth-child(2) > li > ul > li';
	var homepageSingleArchivedColorBlock = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div > div > div > ul > div > div > div:nth-child(3) > li > ul > li';
	var homepageAssociatedColorsBlock = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-story-background.item > div > div.content-container > div.color-pairing.span_8 > div.color-info-container.span_16 > div.paired-with-color-container.span_8 > ul';
	var homepageSingleAssociatedColorBlock = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-story-background.item > div > div.content-container > div.color-pairing.span_8 > div.color-info-container.span_16 > div.paired-with-color-container.span_8 > ul > li';
	var megaMenuSingleCurrentColorBlock = '#nav > ul > li.level0.nav-5.level-top > div > div > ul > div > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > ul > li:nth-child(1) > ul > li';
	var megaMenuSingleExclusiveColorBlock = '#nav > ul > li.level0.nav-5.level-top > div > div > ul > div > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > ul > li:nth-child(2) > ul > li';
	var megaMenuSingleArchivedColorBlock = '#nav > ul > li.level0.nav-5.level-top > div > div > ul > div > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > ul > li:nth-child(3) > ul > li';
	var homepageSelector = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > ul > div > div';
	var homepageSlide =	'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > ul > div';
	var homepageCurrentColorDropPoint = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > ul > div > li:nth-child(1) > div';
	var homepageExclusiveColorDropPoint = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > ul > div > li:nth-child(2) > div';
	var homepageArchivedColorDropPoint = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > ul > div > li:nth-child(3) > div';
	var homepageLeftArrow = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > ul > li:nth-child(1) > div';
	var homepageRightArrow = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > ul > li:nth-child(3) > div';
	var homepageCurrentColorGroup = '#swatch-carousel > div.owl-stage-outer.owl-height > div > div:nth-child(1)';
	var homepageExclusiveColorGroup = '#swatch-carousel > div.owl-stage-outer.owl-height > div > div:nth-child(2)';
	var homepageArchivedColorGroup = '#swatch-carousel > div.owl-stage-outer.owl-height > div > div:nth-child(3)';
	var homepageCurrentColorGroupLabel = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > div:nth-child(3) > div.title';
	var homepageExclusiveColorGroupLabel = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > div:nth-child(4) > div.title';
	var homepageArchivedColorGroupLabel = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > div.explore-by-color.homepage > div.ebc-find-your-color-background.item > div > div.color-selector.span_10 > div > div:nth-child(5) > div.title';

	this.getHomepageSingleCurrentColorBlock = function() {
		return homepageSingleCurrentColorBlock;
	};

	this.getHomepageSingleExclusiveColorBlock = function() {
		return homepageSingleExclusiveColorBlock;
	};

	this.getHomepageSingleArchivedColorBlock = function() {
		return homepageSingleArchivedColorBlock;
	};

	this.getMegaMenuSingleCurrentColorBlock = function() {
		return megaMenuSingleCurrentColorBlock;
	};

	this.getMegaMenuSingleExclusiveColorBlock = function() {
		return megaMenuSingleExclusiveColorBlock;
	};

	this.getMegaMenuSingleArchivedColorBlock = function() {
		return megaMenuSingleArchivedColorBlock;
	};

	this.getHomepageSelector = function() {
		return homepageSelector;
	};

	this.getHomepageSlide = function() {
		return homepageSlide;
	};

	this.getHomepageCurrentColorDropPoint = function() {
		return homepageCurrentColorDropPoint;
	};

	this.getHomepageExclusiveColorDropPoint = function() {
		return homepageExclusiveColorDropPoint;
	};

	this.getHomepageArchivedColorDropPoint = function() {
		return homepageArchivedColorDropPoint;
	};

	this.getHomepageLeftArrow = function() {
		return homepageLeftArrow;
	};

	this.getHomepageRightArrow = function() {
		return homepageRightArrow;
	};

	this.getHomepageCurrentColorGroup = function() {
		return homepageCurrentColorGroup;
	};

	this.getHomepageExclusiveColorGroup = function() {
		return homepageExclusiveColorGroup;
	};

	this.getHomepageArchivedColorGroup = function() {
		return homepageArchivedColorGroup;
	};

	this.getHomepageCurrentColorGroupLabel = function() {
		return homepageCurrentColorGroupLabel;
	};

	this.getHomepageExclusiveColorGroupLabel = function() {
		return homepageExclusiveColorGroupLabel;
	};

	this.getHomepageArchivedColorGroupLabel = function() {
		return homepageArchivedColorGroupLabel;
	};

	this.getHomepageAssociatedColorsBlock = function() {
		return homepageAssociatedColorsBlock;
	};

	this.getHomepageSingleAssociatedColorBlock = function() {
		return homepageSingleAssociatedColorBlock;
	};

	this.extractX = function(element) {
		var xCoordinate = casper.evaluate(function(x) {
			var item = document.querySelector(x);
			var atts = item.getBoundingClientRect().left;
			return atts;
		}, element);
		return xCoordinate;
	};

	this.extractY = function(element) {
		var yCoordinate = casper.evaluate(function(x) {
			var item = document.querySelector(x);
			var atts = item.getBoundingClientRect().right;
			return atts;
		}, element);
		return yCoordinate;
	};
};