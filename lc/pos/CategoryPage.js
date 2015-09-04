/*
* Category page object
*
* @package:	Blueacorn CategoryPage.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-07-24 10:25:33 Blue Acorn, Inc.
*/

'use strict';

//enables the use of xpath to find selectors 
var x = require('casper').selectXPath;

//set screen for better screen shots
casper.options.viewportSize = {width: 1940, height: 1080};

function CategoryPage() {
	//declare variables
	var URL = 'http://nativesite.dev/men/shirts.html';
	var descriptionPath = 'div.product-collateral.toggle-content.tabs';
	var whishListMsgPath = 'li.success-msg';
	var OlPath = 'ol#products-list';
	var UlPath = 'ul.products-grid.products-grid--max-4-col.first.last.odd';
	var productListPath = 'body > div > div.page > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.category-view > div > ul';
	var pathToLogo = x('//*[@id="header"]/div/a/img[1]');
	var sortSelectorPath = x('//*[@id="top"]/body/div/div[2]/div[3]/div/div[2]/div[2]/div[1]/div/div[1]/div[1]/div/selectv');
	//get and set methods
	this.getURL = function() {
		return URL;
	};

	this.getDescripPath = function() {
		return descriptionPath;
	};

	this.getWhishListMsgPath = function() {
		return whishListMsgPath;
	};

	this.getOlPath = function() {
		return OlPath;
	};

	this.getUlPath = function() {
		return UlPath;
	};

	this.getProductListPath = function() {
		return productListPath;
	};

	this.getSortSelectPath = function(){
		return sortSelectorPath;
	};

	this.getProductListCT = function() {
		var CT;
		CT = casper.evaluate(function() { return document.querySelector('body > div > div.page > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.category-view > div > ul').childElementCount});
		return CT;
	};

	//navigate to product page
	this.viewProductDetails = function(productName) {	
		casper.waitForSelector(pathToLogo, function() {
			//Click product link
			this.click('a[title="' + productName + '"]');
		});
	};

	//check shop by
	this.shopByPrice = function(lowerLimit, upperLimit) {
		var regularPriceArray = [];
		var specialPriceArray = [];
		var outOfRange = false;

		casper.waitForSelector('span.price', function() {
			//click appropriate filter
			this.click(x('//*[@id="narrow-by-list"]/dd[1]/ol/li[1]/a'));
		});

		casper.then(function() {
			//grab the price from regular-price span if it exsits
			if(this.exists('span.regular-price'))
				regularPriceArray = this.getElementsInfo('span.regular-price');
			//grab the price from special-price span if it exsits
			if(this.exists('p.special-price'))
				specialPriceArray = this.getElementsInfo('p.special-price');

			//remove "$" from the string and remove white space for comparison
    		for (var i = 0; i < regularPriceArray.length; i++)
    		{
    			regularPriceArray[i].text = regularPriceArray[i].text.replace('$', '').trim();
        	}	

			for (var i = 0; i < specialPriceArray.length; i++)
    		{
    			specialPriceArray[i].text = specialPriceArray[i].text.replace('$', '').trim();
        	}

			//check that all values are within the given range
			for(var i = 0; i < regularPriceArray.length; i++)		
			{
				if(regularPriceArray[i].text < lowerLimit || regularPriceArray[i].text > upperLimit)
					outOfRange = true;
			}

			//check that all values are within the given range
			for(var i = 0; i < specialPriceArray.length; i++)		
			{
				if(specialPriceArray[i].text < lowerLimit || specialPriceArray[i].text > upperLimit)
					outOfRange = true;
			}

			return outOfRange;
		});
	}; 

	//check view gird list selection
	this.changeViewSelector = function() {
		casper.waitForSelector(pathToLogo, function() {
			this.click('a.list');
			this.wait(5000);
		});
	};

	//set category page back to grid view
	this.switchToGridView = function () {
		casper.then(function() {
			this.click('a.grid');
		});
	};
		
	//check show selector functions correctly
	
	//add a product to the wish list
	this.addToWishList = function(productName) {
		var productName = '';

		//select a product and click add to wishlist button
		casper.waitForSelector(pathToLogo, function() {
			this.click('a.link-wishlist');
		});

		casper.waitForSelector(x('//*[@id="login-form"]/div/div[2]/div[1]/h2'), function() {
			//fill in email and password fields
			this.click('input#email');
			this.sendKeys('input#email', 'test@test.com');
			this.click('input#pass');
			this.sendKeys('input#pass', 'password');

			//click login
			this.click('button#send2');
			this.wait(5000);
		});
	};

	//remove a product from the wishlist
	this.removeFromWishlist = function () {
		casper.then(function() {
			this.wait(5000);
			//click trash can button
			this.click('a[title="Remove Item"]');
		});

		casper.then(function() {
			//hit the enter key when the confirmation pop up appears
			casper.evaluate(function triggerKeyDownEvent() {
  					var e = jQuery.Event("keydown");
  					e.which = 13;
  					e.keyCode = 13;
  					jQuery().trigger(e);
			});	
		});
	};

	//check add to compare list	
	this.addToCompareList = function() {
		casper.waitForSelector(pathToLogo, function() {
			//click add to compare
			this.click('a.link-compare');

			//check session message
			casper.waitForSelector(pathToLogo, function() {
				this.click('a.link-compare');
			});
		});
	};	

	//check show selector	
	//takes the index you want to choose for the select and the text for the category link you want to click
	this.changeShowSelector = function(index, linkText) {
		casper.waitForSelector(pathToLogo, function() {			              		              
			this.clickLabel('' + linkText + '', 'a');
		});

		//set index to 0 and trigger change event to update page
		casper.waitForSelector(pathToLogo, function(index) {
			this.evaluate(function(index) {		
				var sel1 = document.querySelector('select[title="Results per page"]');
				var evt = document.createEvent('HTMLEvents');
					
				sel1.selectedIndex = index;
				evt.initEvent('change', true, false);
				sel1.dispatchEvent(evt);	
			});
		});
	};
	
	this.changeSortSelector = function(index){
		casper.waitForSelector(pathToLogo, function(){
			this.evaluate(function(index){
				var sel1 = document.querySelector(sortSelectorPath);
				var evt = document.createEvent('HTMLEvents');
					
				sel1.selectedIndex = index;
				evt.initEvent('change', true, false);
				sel1.dispatchEvent(evt);
			});
		});
	};
};

