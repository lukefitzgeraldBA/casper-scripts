/*
* Footer page object
*
* @package:	Blueacorn Footer.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 10:28:51 Blue Acorn, Inc.
*/


'use strict';

//enables the use of xpath to find selectors
var x = require('casper').selectXPath;

//set screen for better screen shots
casper.options.viewportSize = {width: 1940, height: 1080};

function FooterPage() {
	//declare variable
	var URL = 'http://nativesite.dev';
	var newsletterRegistrationPath = 'input#newsletter';
	var sessionMsgPath = 'input#newsletter';
	var pathToLogo = x('//*[@id="header"]/div/a/img[1]');
	var validationPath = 'div#advice-required-entry-newsletter';

	//get methods
	this.getURL = function(){
		return URL;
	};

	this.getSessionMsgPath = function(){
		return sessionMsgPath;
	};

	this.getValidationPath = function(){
		return validationPath;
	};

	//enter email in newsletter subscription field
	this.fillOutNewsLetterEmail = function(email){
		casper.then(function(){
			this.sendKeys(newsletterRegistrationPath, email);
		});
	};

	//click subscribe button
	this.subscribe = function() {
		casper.then(function() {
			//this.click('button.button');
			this.clickLabel('Subscribe');
		});
	};
};