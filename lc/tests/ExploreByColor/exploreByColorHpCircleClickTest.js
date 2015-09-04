/*
* Check to see that explore by color block functions appropriately when clicking empty slider circles
*
* @package:	Blueacorn exploreByColorHpCircleClickTest.js
* @version:	1.0
* @Author: 	Luke Fitzgerald
* @Copyright:	Copyright 2015-08-25 21:11:12 Blue Acorn, Inc.
*/

casper.userAgent('Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1');

//local testing
phantom.injectJs('../../data/Data.js');
phantom.injectJs('../../utilities/Start.js');
phantom.injectJs('../../utilities/Run.js');
phantom.injectJs('../../utilities/Screenshot.js');
phantom.injectJs('../../utilities/CommonTests.js');
phantom.injectJs('../../pos/AdminLogin.js');
phantom.injectJs('../../pos/AdminSystemConfig.js');
phantom.injectJs('../../pos/ExploreByColor.js');

//product page suite testing
// phantom.injectJs('../data/Data.js');
// phantom.injectJs('../utilities/Start.js');
// phantom.injectJs('../utilities/Run.js');
// phantom.injectJs('../utilities/Screenshot.js');
// phantom.injectJs('../utilities/CommonTests.js');
// phantom.injectJs('../pos/ColorWheel.js');
// phantom.injectJs('../pos/AdminLogin.js');
// phantom.injectJs('../pos/AdminSystemConfig.js');
// phantom.injectJs('../pos/ExploreByColor.js');

var d = new Data();
var start = new Start();
var run = new Run();
var screenshot = new Screenshot();
var ct = new CommonTests();
var ebc = new ExploreByColor();

casper.test.begin('Click left / right arrows in homepage explore by color block', 44, function(test) {
	var numCurrentColors;
	var numExclusiveColors;
	var numArchivedColors;
	var originalXCurrentGroup;
	var originalXExclusiveGroup;
	var originalXArchivedGroup;
	var xCurrentGroup;
	var xExclusiveGroup;
	var xArchivedGroup;
	var widthCurrentGroup;
	var widthExclusiveGroup;
	var widthArchivedGroup;
	var xSelector;
	var originalXSelector;
	var fs = require('fs');

	casper.options.viewportSize = {width:1200, height:1600};
	// casper.options.verbose = true;
	// casper.options.logLevel = 'debug';
	start.startWithCreds(d.getStagingDomain(), d.getHttpUn(), d.getHttpPw());
	
	//debugging
	/*casper.on("page.error", function(msg, trace) {
	    this.echo("Error: " + msg, "ERROR");
	});

	casper.on("remote.message", function(msg) {
	    this.echo("Message: " + msg);
	});

	casper.on("resource.error", function(resourceError) {
	    this.echo("Resource Error: " + resourceError);
	});*/



	/*

		Still need to write a test to check that the selector moved

	*/



	ct.testHttpStatus();

	casper.then(function() {
		//get x coordinate and width of all color group containers
		originalXCurrentGroup = ebc.extractX(ebc.getHomepageCurrentColorGroup());
		originalXExclusiveGroup = ebc.extractX(ebc.getHomepageExclusiveColorGroup());
		originalXArchivedGroup = ebc.extractX(ebc.getHomepageArchivedColorGroup());
		
		xCurrentGroup = originalXCurrentGroup;
		xExclusiveGroup = originalXExclusiveGroup;
		xArchivedGroup = originalXArchivedGroup;
		
		widthCurrentGroup = ebc.extractY(ebc.getHomepageCurrentColorGroup()) - ebc.extractX(ebc.getHomepageCurrentColorGroup());
		widthExclusiveGroup = ebc.extractY(ebc.getHomepageExclusiveColorGroup()) - ebc.extractX(ebc.getHomepageExclusiveColorGroup());
		widthArchivedGroup = ebc.extractY(ebc.getHomepageArchivedColorGroup()) - ebc.extractX(ebc.getHomepageArchivedColorGroup());
	});

	casper.then(function() {
		originalXSelector = ebc.extractX(ebc.getHomepageSelector());
		xSelector = originalXSelector;
	});

	casper.then(function() {
		ct.assertEquals(widthCurrentGroup, widthExclusiveGroup, 'Current and Exclusive groups are the same width');
		ct.assertEquals(widthExclusiveGroup, widthArchivedGroup, 'Exclusive and Archived groups are the same width');
	});

	casper.then(function() {
		//test to make sure slide, selector, left / right arrows exist
		ct.assertExists(ebc.getHomepageSlide());
		ct.assertExists(ebc.getHomepageSelector());
		ct.assertExists(ebc.getHomepageLeftArrow());
		ct.assertExists(ebc.getHomepageRightArrow());
	});

	casper.then(function() {
		//test to make sure current color group is the active group by default, and that exclusive and archived are not active
		ct.assertExists(ebc.getHomepageCurrentColorGroup() + '.active');
		ct.assertExists(ebc.getHomepageExclusiveColorGroup() + ':not(.active)');
		ct.assertExists(ebc.getHomepageArchivedColorGroup() + ':not(.active)');
	});

	casper.then(function() {
		//test to make sure left arrow is unclickable (not active), right arrow is clickable (active)
		ct.assertExists(ebc.getHomepageLeftArrow() + ':not(.active)');
		ct.assertExists(ebc.getHomepageRightArrow() + '.active');
	});

	//this scroll was for testing purposes only
	casper.then(function() {
		//scroll down page, just to see what is happening
		this.scrollTo(0, 1295);
	});

	casper.then(function() {
		//click exclusive color drop point
		this.click(ebc.getHomepageExclusiveColorDropPoint());
	});

	casper.wait(1000).then(function() {
		//test to see if active class is applied to exclusive color group, and active class is removed from current color group
		ct.assertExists(ebc.getHomepageCurrentColorGroup() + ':not(.active)');
		ct.assertExists(ebc.getHomepageExclusiveColorGroup() + '.active');
		ct.assertExists(ebc.getHomepageArchivedColorGroup() + ':not(.active)');
	});

	casper.then(function() {
		//test to see that both arrows are active
		ct.assertExists(ebc.getHomepageRightArrow() + '.active');
		ct.assertExists(ebc.getHomepageLeftArrow() + '.active');
	});

	casper.then(function() {
		//assert that the blocks moved to the left the width of their block
		test.assertEquals(ebc.extractX(ebc.getHomepageCurrentColorGroup()), (xCurrentGroup - widthCurrentGroup), 'Current color group has successfully moved to the left');
		test.assertEquals(ebc.extractX(ebc.getHomepageExclusiveColorGroup()), (xExclusiveGroup - widthExclusiveGroup), 'Exclusive color group has successfully moved to the left');
		test.assertEquals(ebc.extractX(ebc.getHomepageArchivedColorGroup()), (xArchivedGroup - widthArchivedGroup), 'Archived color group has successfully moved to the left');
	});

	casper.then(function() {
		xCurrentGroup = ebc.extractX(ebc.getHomepageCurrentColorGroup());
		xExclusiveGroup = ebc.extractX(ebc.getHomepageExclusiveColorGroup());
		xArchivedGroup = ebc.extractX(ebc.getHomepageArchivedColorGroup());
	});

	casper.then(function() {
		//click archived color drop point
		this.click(ebc.getHomepageArchivedColorDropPoint());
	});
	
	casper.wait(1000).then(function() {
		//test to see if active class is applied to exclusive color group, and active class is removed from current color group
		ct.assertExists(ebc.getHomepageCurrentColorGroup() + ':not(.active)');
		ct.assertExists(ebc.getHomepageExclusiveColorGroup() + ':not(.active)');
		ct.assertExists(ebc.getHomepageArchivedColorGroup() + '.active');
	});

	casper.then(function() {
		//test to see that both arrows are active
		ct.assertExists(ebc.getHomepageRightArrow() + ':not(.active)');
		ct.assertExists(ebc.getHomepageLeftArrow() + '.active');
	});

	casper.then(function() {
		//assert that the blocks moved to the left the width of their block
		test.assertEquals(ebc.extractX(ebc.getHomepageCurrentColorGroup()), (xCurrentGroup - widthCurrentGroup), 'Current color group has successfully moved to the left');
		test.assertEquals(ebc.extractX(ebc.getHomepageExclusiveColorGroup()), (xExclusiveGroup - widthExclusiveGroup), 'Exclusive color group has successfully moved to the left');
		test.assertEquals(ebc.extractX(ebc.getHomepageArchivedColorGroup()), (xArchivedGroup - widthArchivedGroup), 'Archived color group has successfully moved to the left');
	});

	casper.then(function() {
		//reset the x coordinate of each group, based on their new position
		xCurrentGroup = ebc.extractX(ebc.getHomepageCurrentColorGroup());
		xExclusiveGroup = ebc.extractX(ebc.getHomepageExclusiveColorGroup());
		xArchivedGroup = ebc.extractX(ebc.getHomepageArchivedColorGroup());
	});

	casper.then(function() {
		//click exclusive color drop point
		this.click(ebc.getHomepageExclusiveColorDropPoint());
	});
	
	casper.wait(1000).then(function() {
		//check arrows, color groups to ensure appropriate classes were applied
		ct.assertExists(ebc.getHomepageCurrentColorGroup() + ':not(.active)');
		ct.assertExists(ebc.getHomepageExclusiveColorGroup() + '.active');
		ct.assertExists(ebc.getHomepageArchivedColorGroup() + ':not(.active)');
		ct.assertExists(ebc.getHomepageRightArrow() + '.active');
		ct.assertExists(ebc.getHomepageLeftArrow() + '.active');
	});

	casper.then(function() {
		//assert that the blocks moved to the left the width of their block
		test.assertEquals(ebc.extractX(ebc.getHomepageCurrentColorGroup()), (originalXCurrentGroup - widthCurrentGroup), 'Current color group has not moved');
		test.assertEquals(ebc.extractX(ebc.getHomepageExclusiveColorGroup()), (originalXExclusiveGroup - widthExclusiveGroup), 'Exclusive color group has not moved');
		test.assertEquals(ebc.extractX(ebc.getHomepageArchivedColorGroup()), (originalXArchivedGroup - widthArchivedGroup), 'Archived color group has not moved');
	});

	casper.then(function() {
		//click current color drop point, to return everything back to it's original point
		this.click(ebc.getHomepageCurrentColorDropPoint());
	});
	
	casper.wait(1000).then(function() {
		//test to make sure current color group is the active group by default, and that exclusive and archived are not active
		ct.assertExists(ebc.getHomepageCurrentColorGroup() + '.active');
		ct.assertExists(ebc.getHomepageExclusiveColorGroup() + ':not(.active)');
		ct.assertExists(ebc.getHomepageArchivedColorGroup() + ':not(.active)');
	});

	casper.then(function() {
		//test to make sure left arrow is unclickable (not active), right arrow is clickable (active)
		ct.assertExists(ebc.getHomepageLeftArrow() + ':not(.active)');
		ct.assertExists(ebc.getHomepageRightArrow() + '.active');
	});

	casper.then(function() {
		//assert that the blocks moved back to original position
		test.assertEquals(ebc.extractX(ebc.getHomepageCurrentColorGroup()), originalXCurrentGroup, 'Current color group has successfully moved back to the right, into it\'s original position');
		test.assertEquals(ebc.extractX(ebc.getHomepageExclusiveColorGroup()), originalXExclusiveGroup, 'Exclusive color group has successfully moved back to the right, into it\'s original position');
		test.assertEquals(ebc.extractX(ebc.getHomepageArchivedColorGroup()), originalXArchivedGroup, 'Archived color group has successfully moved back to the right, into it\'s original position');	
	});

	run.run();
});
