// num.toString(base) returns a string representation of num in number system represented by the base

let num = 255;

console.log(num.toString(16)); //to Hexadecimal
console.log(num.toString(8)); //to octal
console.log(num.toString(2)); //to binary


// num.toFixed(digits) rounds the num to `digits` number of digits
let n = 1.23456;

console.log(n.toFixed(3));


// Math

let n1 = 2.34567;

// returns floor value of the number
console.log(Math.floor(n1));
// returns ceiling value of the number
console.log(Math.ceil(n1));
// returns rounded value of the number
console.log(Math.round(n1));
// removes anything after decimal point
console.log(Math.trunc(n1));

// reads an integer from a string
console.log(parseInt('100px'));
console.log(parseInt('px100'));
console.log( parseInt('0xff', 16) );

// reads a floating point number from a string
console.log(parseFloat('100.3cm'));
console.log(parseFloat('cm100.3'));

// returns a random number between 0 and 1
console.log(Math.random());

// returns maximum number among all the numbers given as arguments
console.log(Math.max(1,2,3,4,5,12,11,7));

// returns minimum number among all the numbers given as arguments
console.log(Math.min(1,2,3,4,5,12,11,7));

// returns 1st argument number raised to 2nd argument number
console.log(Math.pow(2,5));

console.log(6.35.toFixed(1))