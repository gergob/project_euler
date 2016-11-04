//
//    problem taken from project euler website: http://projecteuler.net/problem=4
//
//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.
//Find the largest palindrome made from the product of two 3-digit numbers.
//

var numUtils = require('./problem03_largest_prime_factor/number_utils.js');
var fs = require('fs');

var palindromes = new Array();
var outFileName = 'problem04_largest_palindrome_product.txt';

for (var i = 100; i < 1000; ++i) {
    for (var j = 100; j < 1000; ++j) {
        var prod = i * j;
        if (numUtils.isPalindrome(prod)) {
            palindromes.push(prod);
        }
    }
}

palindromes.sort();

var output = "The largest palindrome number from product of 3 digit numbers is " + palindromes[palindromes.length - 1];

fs.writeFileSync(outFileName, output);
console.log("Script: " + __filename + "\nWrote: " + output + "\nTo: " + outFileName);
