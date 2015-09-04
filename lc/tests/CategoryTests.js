/* 
* Run all functions from CategoryPage.js 
*
* @package:	Blueacorn CategoryTests.js
* @version:	1.0
* @Author: 	Andrew Morales
* @Copyright:	Copyright © 2015-06-11 10:12:25 Blue Acorn, Inc. 
*/

'use strict';

//Instantiate page objects
phantom.page.injectJs('../pos/CategoryPage.js');
phantom.page.injectJs('../utilities/Screenshot.js');
phantom.page.injectJs('../pos/CategoryPage.js');
phantom.page.injectJs('../utilities/Screenshot.js');
phantom.page.injectJs('../utilities/start.js');
phantom.page.injectJs('../data/productData.js');
phantom.page.injectJs('../data/testData.js');

var categoryPage = new CategoryPage();
var pData = new ProductData();
var tData = new TestData();
var start = new Start();
var outOfRange;

casper.test.begin('Run all category tests', 7, function (test) {
	start.start(categoryPage.getURL());

	categoryPage.viewProductDetails(pData.getName());

	//check that additional product details is present to ensure you are redirected to a product page
	casper.then(function() {
		this.test.assertExists(categoryPage.getDescripPath(), 'Clicking product link correctly redirects to the product page');
	});

	//go back to category page
	casper.then(function() {
		this.back();
	});

	//ensure the correct product gets added to the wishlist
	categoryPage.addToWishList();
	casper.then(function() {
		this.test.assertSelectorHasText(categoryPage.getWhishListMsgPath(), pData.getName() + " has been added to your wishlist. Click here to continue shopping.");
	});

	categoryPage.removeFromWishlist();

	//go back to category page
	casper.then(function() {
		this.back();
		this.back();
		this.back();
	});

	categoryPage.changeViewSelector();

	//ensure category view was convereted to listview
	casper.then(function () {
		this.test.assertExists(categoryPage.getOlPath(), 'View converted to list view');
	});

	categoryPage.switchToGridView();

	//ensure the view is changed back to a grid
	casper.then(function() {
		this.test.assertExists(categoryPage.getUlPath(), 'View converted to grid view');
	});

	categoryPage.addToCompareList();

	//check for the appropriate success messages
	casper.then(function() {
		this.test.assertTextExists("The product " + pData.getName() + " has been added to comparison list.", pData.getName() + "Wass added to the comparison list");
	});

	//select a shop by filter
	outOfRange = categoryPage.shopByPrice(tData.getLowerLimit(), tData.getUpperLimit());

	//check if products were filtered correctly
	casper.then(function() { 
		if(outOfRange)
			test.fail('Some product prices are outside of the given range');
		else
			test.pass('Products filtered correctly');
	});	

	//set show selector to 10, option 1
	categoryPage.changeShowSelector(tData.getShowIndex(), 'Electronics');
	//count ul child elemets to see how many products are present
	casper.then(function() {
		if(categoryPage.getProductListCT() != tData.getProductsToDisplay())
			this.test.fail('Child element count does not match selection');
		else
			this.test.pass('Show selector updated the list appropriately');
	});

	casper.run(function() {
		test.done();			
	});
});
