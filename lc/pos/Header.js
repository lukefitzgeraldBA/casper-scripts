/*
* Header page object
*
* @package:	Blueacorn Header.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 10:29:24 Blue Acorn, Inc.
*/


'use strict';

//enables the use of xpath to find selectors
var x = require('casper').selectXPath;

function Header() {
	var logo = '#logo-copy';
	var searchFieldPath = '#search';
	var searchButtonPath =  '#search_mini_form > div.input-box > button > svg';
	var storeLocatorLink = 'body > div.wrapper > div.page > div.header-language-background > div > ul > a > li';
	var communityDropdown = 'body > div.wrapper > div.page > div.header-language-background > div > ul > li';
	var signInLink = 'body > div.wrapper > div.page > div.header-language-background > div > ul > div > li.sign-in > a > span.label';
	var wishlistLink = 'body > div.wrapper > div.page > div.header-language-background > div > ul > div > li.wishlist > a';
	var miniCart = '#header > div.page-header-container > div.right.table-cell > div > a';
	var miniCartArrow = '#header > div.page-header-container > div.right.table-cell > div > a > span.icon-arrow-down';
	var miniCartNumberBubble = '#header > div.page-header-container > div.right.table-cell > div > a > span.count';
	var miniCartIcon = '#header > div.page-header-container > div.right.table-cell > div > a > span.icon-cart';
	var miniCartSuccessMessage = '#minicart-success-message';
	var getOpenMiniCart = '#header > div.page-header-container > div.right.table-cell > div > a.skip-active';
	var getClosedMiniCart = '#header > div.page-header-container > div.right.table-cell > div > a:not(.skip-active)';
	var miniCartEditCartButton = '#header-cart > div > div > div.minicart-wrapper > div > div.minicart-actions.bottom > div > a.cart-link';
	var miniCartCheckoutButton = '#header-cart > div > div > div.minicart-wrapper > div > div.minicart-actions.bottom > div > a.checkout-button';
	var miniCartSubtotal = '#header-cart > div > div > div.minicart-wrapper > div > div.minicart-actions.bottom > div > div > p > span.price';
	var miniCartProductGrid = '#cart-sidebar';
	var miniCartProducts = '#cart-sidebar > li';
	var miniCartProductsName = '#cart-sidebar > li > div > div > p.product-name > a';
	var miniCartProductsQty = '#cart-sidebar > li > div > div > div > span.qty-wrapper';
	var miniCartProductsPrice = '#cart-sidebar > li > div > div > div > span.info-wrappe';
	var miniCartProductsOptions = '#cart-sidebar > li.item.odd > div > div > p.item-options > span';

	this.getLogo = function(){
		return logo;
	};

	this.getSearchFieldPath = function(){
		return searchFieldPath;
	};

	this.getSearchButtonPath = function(){
		return searchButtonPath;
	};

	this.getStoreLocatorLink = function() {
		return storeLocatorLink;
	};

	this.getCommunityDropdown = function() {
		return communityDropdown;
	};

	this.getSignInLink = function() {
		return signInLink;
	};

	this.getWishlistLink = function() {
		return wishlistLink;
	};

	this.getMiniCartArrow = function() {
		return miniCartArrow;
	};

	this.getMiniCartNumberBubble = function() {
		return miniCartNumberBubble;
	};

	this.getMiniCartIcon = function() {
		return miniCartIcon;
	};

	this.getMiniCartSuccessMessage = function() {
		return miniCartSuccessMessage;
	};

	this.getMiniCart = function() {
		return miniCart;
	};

	this.getOpenMiniCart = function() {
		return getOpenMiniCart;
	};

	this.getClosedMiniCart = function() {
		return getClosedMiniCart;
	};

	this.getMiniCartEditCartButton = function() {
		return miniCartEditCartButton;
	};

	this.getMiniCartCheckoutButton = function() {
		return miniCartCheckoutButton;
	};

	this.getMiniCartSubtotal = function() {
		return miniCartSubtotal;
	};

	this.getMiniCartProductGrid = function() {
		return miniCartProductGrid;
	};

	this.getMiniCartProducts = function() {
		return miniCartProducts;
	};

	this.getMiniCartProductsQty = function() {
		return miniCartProductsQty;
	};

	this.getMiniCartProductsPrice = function() {
		return miniCartProductsPrice;
	};

	this.getMiniCartProductsName = function() {
		return miniCartProductsName;
	};

	this.getMiniCartProductsOptions = function() {
		return miniCartProductsOptions;
	};
};