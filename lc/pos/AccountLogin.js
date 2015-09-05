/*
* Customer Account Login page object
*
* @package:	Blueacorn AccountLogin.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-09-04 11:41:39 Blue Acorn, Inc.
*/

'use strict';

function AccountLogin() {
	var createAccountButton = '#login-form > div > div.col-1.new-users > div.buttons-set > a';
	var email = '#email';
	var pw = '#pass';
	var loginButton = '#send2';

	this.getCreateAccountButton = function() {
		return createAccountButton;
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
};