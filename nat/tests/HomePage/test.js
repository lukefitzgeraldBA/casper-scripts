var casper = require('casper').create();
casper.options.viewportSize = {width:1440, height:950};

casper.start();

casper.setHttpAuth('nat', 'pass4nat');

casper.thenOpen('http://staging.shopnational.com', function() {
	this.echo('page opened');
});

casper.then(function() {
	this.capture('page0.png');
	//this.mouse.move('body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(1) > div.call-to-action');
	this.mouse.move(455, 1242);
	this.capture('page1.png');
	this.captureSelector('hover2.png', 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(1) > div.call-to-action');
});

casper.on('mouse.move', function() {
	this.captureSelector('hover3.png', 'body > div.wrapper > div > div.main-container.col1-layout > div > div > div.home-callouts > div.col > div.col1 > div:nth-child(1) > div.call-to-action');
	this.capture('page2.png');
});

casper.run();