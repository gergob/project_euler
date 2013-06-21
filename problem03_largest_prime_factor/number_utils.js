//function which tests if a number is prime or not

number_utils = {

	isPrime : function(number) {
		if(number < 2) return false;
		if(number == 2 || number == 3) return true;
		for(var i=2; i<=Math.floor(Math.sqrt(number)); i++) {
			if(number % i == 0) {
				return false;
			}
		}
		return true;
	},

	getPrimesTillNumber: function (number) {
		var that = this;
		var result = new Array();
		if(number > 1) {
			if(number == 3 ) {
				result.push(2);
				result.push(3);
			}
			else if(number == 2) {
				result.push(2);
			}
			else {
				result.push(2);
				result.push(3);
				for(var cursor=5; cursor < number; cursor +=2) {
					if(that.isPrime(cursor)) {
						result.push(cursor);
					}
				}
			}
		}
		
		return result;

	}

};

module.exports = number_utils;


