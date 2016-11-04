//
//    problem taken from project euler website: http://projecteuler.net/problem=6
//
//The sum of the squares of the first ten natural numbers is,
//
//1^2 + 2^2 + ... + 10^2 = 385
//The square of the sum of the first ten natural numbers is,
//(1 + 2 + ... + 10)^2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
//
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var fs = require('fs');
var outFileName = "problem06_sum_square_differences.txt";

var sumOfFirst100Numbers = 0;
var sumOfFirst100Squares = 0;

for (var cursor = 1; cursor <= 100; ++cursor) {
    sumOfFirst100Numbers += cursor;
    sumOfFirst100Squares += (cursor * cursor);
}


var output = "The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is " + ((sumOfFirst100Numbers * sumOfFirst100Numbers) - sumOfFirst100Squares).toString();

fs.writeFileSync(outFileName, output);
console.log("Script: " + __filename + "\nWrote: " + output + "\nTo: " + outFileName);
