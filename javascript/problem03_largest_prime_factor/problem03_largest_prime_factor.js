//
//    problem taken from project euler website: http://projecteuler.net/problem=3
//
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
//
//


var fs = require('fs');
var numberUtils = require('./number_utils');
var theNumber = 600851475143;
var outFileName = "largest_prime_factor_of_600851475143.txt"

var primes = numberUtils.getPrimesTillNumber(Math.floor(Math.sqrt(theNumber)) + 1);
var largestPrimeFactor = 0;

for (var i = primes.length - 1; i >= 0; i--) {
    if (theNumber % primes[i] == 0) {
        largestPrimeFactor = primes[i];
        break;
    }
}

var output = "The largest prime factor of number " + theNumber + " is " + largestPrimeFactor;

fs.writeFileSync(outFileName, output);
console.log("Script: " + __filename + "\nWrote: " + output + "\nTo: " + outFileName);
