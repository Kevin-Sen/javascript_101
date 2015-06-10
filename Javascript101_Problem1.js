/*

"If we list all the natural numbers below 10 that are multiples 
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000."

In order to solve, we need the sum of all natural numbers
that are:
	multiples of 3;
	multiples of 5;
	below 1000.
Create a variable (sum); this is what we are trying to solve.
Using the 'for' Loop tool, we describe how our integers act.
However, we only want to include factors of 3 and 5.
Therefore we use the modulus tool in addition to the 'or' tool
to include only pure factors of 3 & 5.
In our For loop, we constantly add integers to the sum until
the upper limit (1000)is reached.
Finish by commanding the console print the sum.

*/

var sum = 0;

for (var i = 1; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
		sum += i;
	}
};

console.log (sum);