/*
* Simple product page object
*
* @package:	Blueacorn SimpleProductPage.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 10:31:21 Blue Acorn, Inc.
*/

'use strict';

function SimpleProductPage() {
	var addToCartButton = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.add-to-cart-buttons > button';
	var addToWishlistButton = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > ul > li > a';
	var addQtyButton = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.qty-wrapper.col.span_8 > div.qty-input-container > div.icon-plus';
	var subtractQtyButton = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.qty-wrapper.col.span_8 > div.qty-input-container > div.icon-minus';
	var qtyInput = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.qty-wrapper.col.span_8 > div.qty-input-container > div.input';
	var inStockFlag = '#product_addtocart_form > div.product-shop.col.span_4.tablet.mobile > span > div.product-options-bottom > div > div.qty-wrapper.col.span_8 > div.stock > p';
	var productName = 'body > div.wrapper > div.page > div.main-container.col1-layout > div > div > div.product-header > div.product-name > h1';
	
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
};