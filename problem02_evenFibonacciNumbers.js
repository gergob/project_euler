//
//    problem taken from project euler website: http://projecteuler.net/problem=2
//
//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
//
//

var fs = require('fs');
var outFileName = "sum_of_even_Fibonacci_numbers_below_4_million.txt"

function getSumOfNumbers(number) {
	var sum = 0;
	var divider = 10;
	do {
		sum += Math.floor(number % divider);
		number = Math.floor(number / divider);

	} while( number != 0)

	return sum;
}

function getFibonacci() {
	var result = new Array();
	result.push(1);
	result.push(1);
	var counter = 1;
	var currentValue = 1;

	do {
		currentValue = result[counter-1] + result[counter];
		counter++;
		result.push(currentValue);
	}
	while(currentValue <= 4000000)

	return result;
}

var fibonacciNumbers = getFibonacci();
var result = new Array();

for (var cursor=0; cursor<fibonacciNumbers.length; ++cursor) {
	if(fibonacciNumbers[cursor] % 2 == 0) {
		result.push ({"fibonacciNumber" : fibonacciNumbers[cursor], "sum" : getSumOfNumbers(fibonacciNumbers[cursor]) });
	}
}

var output = "";
for (var cursor=1; cursor<result.length; ++cursor) {
	output+= (cursor == result.length 
			? result[cursor].fibonacciNumber + " : " + result[cursor].sum 
			: result[cursor].fibonacciNumber + " : " + result[cursor].sum + "\n"  );
}

fs.writeFileSync(outFileName, output);  
console.log("Script: " + __filename + "\nWrote: " + output + "To: " + outFileName);
