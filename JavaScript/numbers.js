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
console.log()