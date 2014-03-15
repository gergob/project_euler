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

	},

	isPalindrome: function(number) {		
		var numberAsString = number.toString();
		
		for(var front=0, end=numberAsString.length-1; front<end; front++,end--) {
			if(numberAsString[front] != numberAsString[end]) {
				return false;
			}
		}
		
		return true;
	},

	printArray: function(array, delimiter) {
		if(array) {
			var output = '';
			var localDelimiter = delimiter || ',';
			for(var i=0; i < array.length ; ++i) {
				output += (array[i] + localDelimiter);
			}
			console.log(output);
		}
	},

	checkIfAllNumbersEvenlyDivide : function(numberToDivide, maxNumberToUse) {
		for(var cursor = 1; cursor <= maxNumberToUse; ++cursor) {
			if(numberToDivide % cursor != 0) {
				return false;
			}
		}

		return true;
	}

};


module.exports = number_utils;


