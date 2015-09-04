function Constants() {
	var un = 'luke.fitzgerald@blueacorn.com';
	var pw = 'pass4luke';
	var httpUn = 'nat';
	var httpPw = 'pass4nat';

	this.getUn = function() {
		return un;
	};

	this.getPw = function() {
		return pw;
	};

	this.getHttpUn = function() {
		return httpUn;
	};

	this.getHttpPw = function() {
		return httpPw;
	};
}