/*
* Page object for the homepage
*
* @package:	Blueacorn HomePage.js
* @version:	1.0
* @Author: 	Blue Acorn, Inc.  <code@blueacorn.com>
* @Copyright:	Copyright 2015-06-24 09:57:07 Blue Acorn, Inc.
*/

function HomePage() {
	var productionUrl = 'http://shopnational.com/';
	var stagingUrl = 'http://staging.shopnational.com/';
	var qaUrl = 'http://qa.nat.dev/';
	var pageTitle = 'National Homepage';
	var heroImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div:nth-child(3) > ul > li > div > div.large-image';
	var mobileHeroImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div:nth-child(3) > ul > li > div > div.small-image';
	var heroImageButton = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div:nth-child(3) > ul > li > div > div.hero-content > div:nth-child(2) > button';
	var mobileHeroContentBlock = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div:nth-child(3) > ul > li > div > div.hero-content';
	var block1ImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(1) > div.img';
	var block1Button = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(1) > div.call-to-action > button';
	var block1MobileImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(1) > div.img';
	var block1MobileContentPath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(1) > div.content';
	var block1MobileCtaPath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(1) > div.call-to-action'
	var block2ImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(2) > div.img';
	var block2Button = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(2) > div.call-to-action > button';
	var block2MobileImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(2) > div.img';
	var block2MobileContentPath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(2) > div.content';
	var block2MobileCtaPath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(2) > div.call-to-action';
	var block3ImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col2 > div > div.img';
	var block3Button = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col2 > div > div.call-to-action > button';
	var block4ImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.row > div.style3 > div.img';
	var block4Button = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.row > div.style3 > div.call-to-action > button';
	var block5ImagePath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.row > div.style4.offset-top > div.img';
	var block5Button = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.row > div.style4.offset-top > div.call-to-action > button';
	var mobilePopCatHeadingPath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.featured-categories > h2';
	var mobilePopCatBlockPath = 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.featured-categories > div';

	this.getProductionUrl = function() {
		return productionUrl;
	};

	this.getStagingUrl = function() {
		return stagingUrl;
	};

	this.getLocalUrl = function() {
		return qaUrl;
	};

	this.getPageTitle = function() {
		return pageTitle;
	};

	this.getHeroImagePath = function() {
		return heroImagePath;
	}

	this.getMobileHeroImagePath = function() {
		return mobileHeroImagePath;
	}

	this.getHeroImageButtonPath = function() {
		return heroImageButton;
	};

	this.getMobileHeroContentPath = function() {
		return mobileHeroContentBlock;
	};

	this.getBlock1ImagePath = function() {
		return block1ImagePath;
	};

	this.getBlock1ButtonPath = function() {
		return block1Button;
	};

	this.getMobileBlock1ImagePath = function() {
		return block1MobileImagePath;
	};

	this.getMobileBlock1ContentPath = function() {
		return block1MobileContentPath;
	}

	this.getMobileBlock1CtaPath = function() {
		return block1MobileCtaPath;
	}

	this.getBlock2ImagePath = function() {
		return block2ImagePath;
	};

	this.getBlock2ButtonPath = function() {
		return block2Button;
	};

	this.getMobileBlock2ImagePath = function() {
		return block2MobileImagePath;
	};

	this.getMobileBlock2ContentPath = function() {
		return block2MobileContentPath;
	}

	this.getMobileBlock2CtaPath = function() {
		return block2MobileCtaPath;
	}

	this.getBlock3ImagePath = function() {
		return block3ImagePath;
	};

	this.getBlock3ButtonPath = function() {
		return block3Button;
	};

	this.getBlock4ImagePath = function() {
		return block4ImagePath;
	};

	this.getBlock4ButtonPath = function() {
		return block4Button;
	};

	this.getBlock5ImagePath = function() {
		return block5ImagePath;
	};

	this.getBlock5ButtonPath = function() {
		return block5Button;
	};

	this.getPopCatHeadingPath = function() {
		return mobilePopCatHeadingPath;
	};

	this.getPopCatBlockPath = function() {
		return mobilePopCatBlockPath;
	};
}