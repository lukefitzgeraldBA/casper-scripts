/*
* Page object for the account login page
*
* @package:	Blueacorn AccountLogin.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-25 11:39:07 Blue Acorn, Inc.
*/

phantom.page.injectJs('/Users/Luke/Documents/NAT/scripts/objects/AccountDashboard.js');

function AccountLogin() {
	var productionUrl = 'http://shopnational.com/customer/account/login';
	var stagingUrl = 'http://staging.shopnational.com/customer/account/login';
	var qaUrl = 'http://qa.nat.dev/customer/account/login';
	var pageTitle = 'Customer Login';
	var emailFieldPath = '#email';
	var pwFieldPath = '#pass';
	var loginButtonPath = '#send2';	
	var forgotPwLinkPath = '#login-form > div > div.col-2.registered-users > div.content.fieldset > ul > li:nth-child(3) > a';
	var createAccountButtonPath = '#login-form > div > div.col-1.new-users > div.buttons-set > a';
	var pageHeaderPath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.account-login > div > h1';

	this.getProductionUrl = function() {
		return productionUrl;
	};

	this.getStagingUrl = function() {
		return stagingUrl;
	};

	this.getQaUrl = function() {
		return qaUrl;
	};

	this.getPageTitle = function() {
		return pageTitle;
	};

	this.getEmailFieldPath = function() {
		return emailFieldPath;
	};

	this.getPwFieldPath = function() {
		return pwFieldPath;
	};

	this.getLoginButtonPath = function() {
		return loginButtonPath;
	};

	this.getForgotPwLinkPath = function() {
		return forgotPwLinkPath;
	};

	this.getCreateAccountButtonPath = function() {
		return createAccountButtonPath;
	};

	this.getPageHeaderPath = function() {
		return pageHeaderPath;
	};

	this.enterUn = function(Un) {
		casper.then(function() {
			casper.sendKeys(emailFieldPath, Un);
		});
	};

	this.enterPw = function(Pw) {
		casper.then(function() {
			casper.sendKeys(pwFieldPath, Pw);
		});
	};
	
	this.enterUn2 = function(Un) {
		casper.sendKeys(emailFieldPath, Un);
	};

	this.enterPw2 = function(Pw) {
		casper.sendKeys(pwFieldPath, Pw);
	};

	this.clickLoginButton = function(acctDash) {
		casper.then(function() {
			casper.click(loginButtonPath);
			
			var aD = new AccountDashboard(); 
			
			if (aD == null) {
				console.log('Is null!');
			}
			else {
				console.log('Not null!');
			}

			acctDash(aD);
		});
	};

	this.clickLoginButton2 = function() {
		casper.then(function() {
			casper.click(loginButtonPath);
		});
	}; 

	this.clickCreateAccountButton = function() {
		casper.then(function() {
			casper.click(createAccountButtonPath);
		});
	}

}