/*
* Checkout page object
*
* @package:	Blueacorn Checkout.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-09-04 13:14:33 Blue Acorn, Inc.
*/

'use strict';

function Checkout() {
	var url = 'checkout/onepage';
	var checkoutHeading = 'body > div.wrapper > div > div.main-container.col2-right-layout > div > div.col-main > div > h1';
	var guestCheckoutButton = '#onepage-guest-register-button';
	var loginForm = '#login-form';
	var email = '#login-email';
	var pw = '#login-password';
	var loginButton = '#checkout-step-login > div > div.col-2 > div:nth-child(1) > div > button';
	var forgotPwLink = '#login-form > div > ul > li:nth-child(3) > a';
	var billingStepTitle = '#opc-billing > div.step-title';
	var billingForm = '#co-billing-form';
	var billingFirstName = '#billing-new-address-form > div > ul > li:nth-child(1) > div > div.field.name-firstname > div > input';
	var billingLastName = '#billing-new-address-form > div > ul > li:nth-child(1) > div > div.field.name-lastname > div > input';
	var billingEmail = '#billing-new-address-form > div > ul > li:nth-child(2) > div:nth-child(2) > div > input';
	var billingAddress = '#billing-new-address-form > div > ul > li:nth-child(3) > div > input';
	var billingCity = '#billing-new-address-form > div > ul > li:nth-child(5) > div:nth-child(1) > div > input';
	var billingState = '#billing-new-address-form > div > ul > li:nth-child(5) > div:nth-child(2) > div > div > span';
	var billingStateDropdownOpen = '#billing-new-address-form > div > ul > li:nth-child(5) > div:nth-child(2) > div > div.ba-select.ba-select-box.ba-over.open';
	var billingStateSc = '#billing-new-address-form > div > ul > li:nth-child(5) > div:nth-child(2) > div > div.ba-select.ba-select-box.ba-over.open > div > ul > li:nth-child(55)';
	var billingStateSelect = '#billing-new-address-form > div > ul > li:nth-child(5) > div:nth-child(2) > div > select';
	var billingZip = '#billing-new-address-form > div > ul > li:nth-child(6) > div:nth-child(1) > div > input';
	var billingCountry = '#billing-new-address-form > div > ul > li:nth-child(6) > div:nth-child(2) > div > div > span';
	var billingPhone = '#billing-new-address-form > div > ul > li:nth-child(7) > div > div > input';
	var billingContinueButton = '#billing-buttons-container > button.button.continue';
	var billingShipToThisAddressRadioButton = '#co-billing-form > div > ul > li:nth-child(2) > input';
	var billingShipToAnotherAddressRadioButton = '#co-billing-form > div > ul > li:nth-child(3) > input';
	var billingShipToThisAddressRadioButtonLabel = '#co-billing-form > div > ul > li:nth-child(2) > label';
	var billingShipToAnotherAddressRadioButtonLabel = '#co-billing-form > div > ul > li:nth-child(3) > label';
	
	//
	//		Enter shipping address variables here
	//

	var shippingMethodSubheading = '#checkout-shipping-method-load > dl > dt';
	var shippingMethodForm = '#co-shipping-method-form';
	var shippingMethodRadioButtonLabel = '#checkout-shipping-method-load > dl > dd > ul > li:nth-child(1) > label';
	var shippingMethodContinueButton = '#shipping-method-buttons-container > button.button.continue';
	var paymentInfoForm = '#co-payment-form';
	var paymentOptionLabel = '#dt_method_braintree > label';
	var ccNum = '#braintree_cc_number';
	var ccvNum = '#braintree_cc_cid';
	var paymentInfoContinueButton = '#payment-buttons-container > button.button.continue';
	var orderReviewBlock = '#checkout-review-load';
	var orderReviewBlockTotal = '#checkout-review-table > tfoot > tr.last > td.a-right.last > strong > span';
	var submitOrderButton = '#review-buttons-container > button';

	this.getUrl = function() {
		return url;
	};

	this.getCheckoutHeading = function() {
		return checkoutHeading;
	};

	this.getGuestCheckoutButton = function() {
		return guestCheckoutButton;
	};

	this.getLoginForm = function() {
		return loginForm;
	};

	this.getEmail = function() {
		return email;
	};

	this.getPw = function() {
		return pw;
	};

	this.getLoginButton = function() {
		return loginButton;
	};

	this.getForgotPwLink = function() {
		return forgotPwLink;
	};

	this.getBillingStepTitle = function() {
		return billingStepTitle;
	};

	this.getBillingForm = function() {
		return billingForm;
	};

	this.getBillingFirstName = function() {
		return billingFirstName;
	};

	this.getBillingLastName = function() {
		return billingLastName;
	};

	this.getBillingEmail = function() {
		return billingEmail;
	};

	this.getBillingAddress = function() {
		return billingAddress;
	};

	this.getBillingCity = function() {
		return billingCity;
	};

	this.getBillingState = function() {
		return billingState;
	};

	this.getBillingStateDropdownOpen = function() {
		return billingStateDropdownOpen;
	};

	this.getBillingStateSc = function() {
		return billingStateSc;
	};

	this.getBillingStateSelect = function() {
		return billingStateSelect;
	};

	this.getBillingZip = function() {
		return billingZip;
	};

	this.getBillingCountry = function() {
		return billingCountry;
	};

	this.getBillingPhone = function() {
		return billingPhone;
	};

	this.getBillingContinueButton = function() {
		return billingContinueButton;
	};

	this.getBillingShipToThisAddressRadioButton = function() {
		return billingShipToThisAddressRadioButton;
	};

	this.getBillingShipToAnotherAddressRadioButton = function() {
		return billingShipToAnotherAddressRadioButton;
	};

	this.getBillingShipToThisAddressRadioButtonLabel = function() {
		return billingShipToThisAddressRadioButtonLabel;
	};

	this.getBillingShipToAnotherAddressRadioButtonLabel = function() {
		return billingShipToAnotherAddressRadioButtonLabel;
	};

	this.getShippingMethodSubheading = function() {
		return shippingMethodSubheading;
	};

	this.getShippingMethodForm = function() {
		return shippingMethodForm;
	};

	this.getShippingMethodRadioButtonLabel = function() {
		return shippingMethodRadioButtonLabel;
	};

	this.getShippingMethodContinueButton = function() {
		return shippingMethodContinueButton;
	};

	this.getPaymentInfoForm = function() {
		return paymentInfoForm;
	};

	this.getPaymentOptionLabel = function() {
		return paymentOptionLabel;
	};

	this.getCcNum = function() {
		return ccNum;
	};

	this.getCcvNum = function() {
		return ccvNum;
	};

	this.getPaymentInfoContinueButton = function() {
		return paymentInfoContinueButton;
	};

	this.getOrderReviewBlock = function() {
		return orderReviewBlock;
	};

	this.getOrderReviewBlockTotal = function() {
		return orderReviewBlockTotal;
	};

	this.getSubmitOrderButton = function() {
		return submitOrderButton;
	};
};