/*
* Page Object for admin login page
*
* @package:	Blueacorn AdminLogin.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-08-10 14:04:06 Blue Acorn, Inc.
*/

'use strict';

function AdminLogin() {
	var adminUrl = 'admin';
	var un = '#username';
	var pw = '#login';
	var loginButton = '#loginForm > div > div.form-buttons > input';
	var form = '#loginForm';

	this.getUn = function() {
		return un;
	};

	this.getPw = function() {
		return pw;
	};

	this.getLoginButton = function() {
		return loginButton;
	};

	this.getForm = function() {
		return form;
	};
};