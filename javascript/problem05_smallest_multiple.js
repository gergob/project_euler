//
//    problem taken from project euler website: http://projecteuler.net/problem=5
//
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//
//

var numUtils = require('./problem03_largest_prime_factor/number_utils.js');
var fs = require('fs');
var outFileName = "problem05_smallest_multiple.txt";

var theNumber = 0;
for (var cursor = 22;; cursor++) {
    if (numUtils.checkIfAllNumbersEvenlyDivide(cursor, 20)) {
        theNumber = cursor;
        break;
    }
}

var output = "The smallest positive number which can be evenly divisible by all of the numbers from 1 to 20 is " + theNumber;

fs.writeFileSync(outFileName, output);
console.log("Script: " + __filename + "\nWrote: " + output + "\nTo: " + outFileName);
