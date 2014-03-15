//
//    problem taken from project euler website: http://projecteuler.net/problem=7
//
//The sum of the squares of the first ten natural numbers is,
//
//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
//What is the 10 001st prime number?
//

var numUtils = require('./problem03_largest_prime_factor/number_utils.js');
var fs = require('fs');
var outFileName = "problem07_the_10001th_prime.txt";

var counter = 2;
var currentNumber = 3;

do {
	if(numUtils.isPrime(currentNumber)) {
		++counter;
		if(counter == 10001) break;
	}
	currentNumber += 2;
}while(true)

var output = "The 10001th prime number is " + currentNumber;

fs.writeFileSync(outFileName, output);  
console.log("Script: " + __filename + "\nWrote: " + output + "\nTo: " + outFileName);
