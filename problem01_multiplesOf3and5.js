//
//    problem taken from project euler website: http://projecteuler.net/problem=1
//
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
//
//

var fs = require('fs');
var outFileName = "sum_of_multiples_of_3_and_5_below_1000.txt"

var sums = new Array();


function getSumOfNumbers(number) {
	var sum = 0;
	var divider = 10;
	do {
		sum += Math.floor(number % divider);
		number = Math.floor(number / divider);

	} while( number != 0)

	return sum;
}


for (var cursor=1; cursor<1000; ++cursor) {
	if(cursor % 3 == 0 || cursor % 5 == 0) {
		sums.push({"number" : cursor, "sum" : getSumOfNumbers(cursor)});
	}
}



var output = "";
for (var cursor=1; cursor<sums.length; ++cursor) {
	output+= (cursor == sums.length ? sums[cursor].number + " : "+sums[cursor].sum : sums[cursor].number + " : "+sums[cursor].sum + "\n"  );
}

fs.writeFileSync(outFileName, output);  
console.log("Script: " + __filename + "\nWrote: " + output + "To: " + outFileName);

