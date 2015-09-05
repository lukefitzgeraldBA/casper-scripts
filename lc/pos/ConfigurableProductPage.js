/*
* Configurable product page object
*
* @package:	Blueacorn ConfigurableProductPage.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 10:50:05 Blue Acorn, Inc.
*/

'use strict';

function ConfigurableProductPage() {
	var addToCartButton = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.add-to-cart-buttons > button';
	var addToWishlistButton = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > ul.add-to-links > li > a';
	var addQtyButton = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.qty-wrapper.col.span_8 > div.qty-input-container > div.icon-plus';
	var subtractQtyButton = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.qty-wrapper.col.span_8 > div.qty-input-container > div.icon-minus';
	var qtyInput = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.qty-wrapper.col.span_8 > div.qty-input-container > div.input';
	var inStockFlag = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.qty-wrapper.col.span_8 > div.stock > p > span.value';
	var productName = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > div.product-header > div.product-name > h1';
	var configOptionsBlock = '#product-options-wrapper';
	var configDropdown1 = '#product-options-wrapper > dl > dd > div > div.ba-select.ba-select-box.ba-swatch';
	var configDropdown1Shiv = '#product-options-wrapper > dl > dd > div > div.ba-select.ba-select-box.ba-swatch > span';
	var configDropdown1Options = '#product-options-wrapper > dl > dd > div > div.ba-select.ba-select-box.ba-swatch > div > ul';
	var configDropdown1SingleOption = '#product-options-wrapper > dl > dd > div > div.ba-select.ba-select-box.ba-swatch > div > ul > li';
	var configDropdown1SelectList = '#product-options-wrapper > dl > dd > div > select';
	var openConfig1Dropdown = '#product-options-wrapper > dl > dd > div > div.ba-select.ba-select-box.ba-swatch.open';
	var closedConfig1Dropdown = '#product-options-wrapper > dl > dd > div > div.ba-select.ba-select-box.ba-swatch:not(.open)';
	var configDropdown2 = '#product-options-wrapper > dl > dd.last > div > div.ba-select.ba-select-box.ba-swatch';
	var configDropdown2Shiv = '#product-options-wrapper > dl > dd.last > div > div.ba-select.ba-select-box.ba-swatch > span';
	var configDropdown2Options = '#product-options-wrapper > dl > dd.last > div > div.ba-select.ba-select-box.ba-swatch > div > ul';
	var configDropdown2SingleOption = '#product-options-wrapper > dl > dd.last > div > div.ba-select.ba-select-box.ba-swatch > div > ul > li';
	var configDropdown2SelectList = '#product-options-wrapper > dl > dd.last > div > select';
	var openConfig2Dropdown = '#product-options-wrapper > dl > dd.last > div > div.ba-select.ba-select-box.ba-swatch.open';
	var closedConfig2Dropdown = '#product-options-wrapper > dl > dd.last > div > div.ba-select.ba-select-box.ba-swatch:not(.open)';

	this.getAddToCartButton = function() {
		return addToCartButton;
	};

	this.getAddToWishlistButton = function() {
		return addToWishlistButton;
	};

	this.getAddQtyButton = function() {
		return addQtyButton;
	};

	this.getSubtractQtyButton = function() {
		return subtractQtyButton;
	};

	this.getQtyInput = function() {
		return qtyInput;
	};

	this.getInStockFlag = function() {
		return inStockFlag;
	};

	this.getProductName = function() {
		return productName;
	};

	this.getConfigOptionsBlock = function() {
		return configOptionsBlock;
	};

	this.getConfigDropdown1 = function() {
		return configDropdown1;
	};

	this.getConfigDropdown1Options = function() {
		return configDropdown1Options;
	};

	this.getConfigDropdown1SingleOption = function() {
		return configDropdown1SingleOption;
	};

	this.getConfigDropdown1Shiv = function() {
		return configDropdown1Shiv;
	};

	this.getConfigDropdown1SelectList = function() {
		return configDropdown1SelectList;
	};

	this.getOpenConfig1Dropdown = function() {
		return openConfig1Dropdown;
	};

	this.getClosedConfig1Dropdown = function() {
		return closedConfig1Dropdown;
	};

	this.getConfigDropdown2 = function() {
		return configDropdown2;
	};

	this.getConfigDropdown2Options = function() {
		return configDropdown2Options;
	};

	this.getConfigDropdown2SingleOption = function() {
		return configDropdown2SingleOption;
	};

	this.getConfigDropdown2Shiv = function() {
		return configDropdown2Shiv;
	};

	this.getConfigDropdown2SelectList = function() {
		return configDropdown2SelectList;
	};

	this.getOpenConfig2Dropdown = function() {
		return openConfig2Dropdown;
	};

	this.getClosedConfig2Dropdown = function() {
		return closedConfig2Dropdown;
	};
};	