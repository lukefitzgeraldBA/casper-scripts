/*
* Page object for the navigation block in a customer's account
*
* @package:	Blueacorn AccountNavigation.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-24 09:57:07 Blue Acorn, Inc.
*/

function AccountNavigation() {	
	var accountInformationLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(2) > a';
	var addressBookLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(3) > a';
	var myOrdersLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(4) > a';
	var billingAgreementsLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(5) > a';
	var recurringProfilesLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(6) > a';
	var myProductReviewsLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(7) > a';
	var myTagsLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(8) > a';
	var myWishlistLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(9) > a';
	var myApplicationsLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(10) > a';
	var newsletterSubscriptionsLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(11) > a';
	var myDownloadableProductsLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(12) > a';
	var storeCreditLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(13) > a';
	var giftCardLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(14) > a';
	var giftRegistryLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(15) > a';
	var rewardPointsLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(16) > a';
	var myInvitationsLinkPath = 'body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-left.sidebar.col-left-first > div > div.block-content > ul > li:nth-child(16) > a';

	this.clickAccountInformationLink = function() {
		casper.then(function() {
			casper.click(accountInformationLinkPath);
		});
	};

	this.clickAddressBookLink = function() {
		casper.then(function() {
			casper.click(addressBookLinkPath);
		});
	};

	this.clickMyOrdersLink = function() {
		casper.then(function() {
			casper.click(myOrdersLinkPath);
		});
	};

	this.clickBillingAgreementsLink = function() {
		casper.then(function() {
			casper.click(billingAgreementsLinkPath);
		});
	};

	this.clickRecurringProfilesLink = function() {
		casper.then(function() {
			casper.click(recurringProfilesLinkPath);
		});
	};

	this.clickMyProductReviewsLink = function() {
		casper.then(function() {
			casper.click(myProductReviewsLinkPath);
		});
	};

	this.clickMyTagsLink = function() {
		capser.then(function() {
			casper.click(myTagsLinkPath);
		});
	};

	this.clickMyWishlistLink = function() {
		casper.then(function() {
			casper.click(myWishlistLinkPath);
		});
	};

	this.clickMyApplicationsLink = function() {
		casper.then(function() {
			casper.click(myApplicationsLinkPath);
		});
	};

	this.clickNewsletterSubscriptionLink = function() {
		casper.then(function() {
			casper.click(newsletterSubscriptionsLinkPath);
		});
	};

	this.clickMyDownloadableProductsLink = function() {
		capser.then(function() {
			casper.click(myDownloadableProductsLinkPath);
		});
	};

	this.clickStoreCreditLink = function() {
		casper.then(function() {
			casper.click(storeCreditLinkPath);
		});
	};

	this.clickGiftCardLink = function() {
		casper.then(function() {
			casper.click(giftCardLinkPath);
		});
	};

	this.clickGiftRegistryLink = function() {
		casper.then(function() {
			casper.click(giftRegistryLinkPath);
		});
	};

	this.clickRewardsPointsLink = function() {
		casper.then(function() {
			casper.click(rewardPointsLinkPath);
		});
	};

	this.clickMyInvitationsLink = function() {
		casper.then(function() {
			casper.click(myInvitationsLinkPath);
		});
	};
}