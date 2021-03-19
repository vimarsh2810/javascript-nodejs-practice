// length property returns the length of the string
let hello = 'hello';
console.log(hello.length);

// returns character at required position
console.log(hello[1]);
console.log(hello.charAt(1));

let randomString = 'tHiS iS rAnDoM sTrInG 1223';

// returns string converted to Lowercase
console.log(randomString.toLowerCase());
// returns string converted to Uppercase
console.log(randomString.toUpperCase());

// function to invert the case of each character of given string
const invertCase = (inputString) => {
  let outputString = '';
  for(let ch of inputString) {
    if(ch === ch.toLowerCase()) {
      outputString += ch.toUpperCase();
    }
    else {
      outputString += ch.toLowerCase();
    }
  }
  return outputString;
}

console.log(invertCase(randomString));

let indexString = 'Hello planet earth, you are a great planet';

// returns position of 1st match starting from beginning
console.log(indexString.indexOf('planet'));

// returns position of 1st match starting from given position
console.log(indexString.indexOf('planet', 7));

// returns position of last match
console.log(indexString.lastIndexOf('planet'));

// returns true if the given string includes substring given in argument otherwise false
console.log(indexString.includes('earth'));
console.log(indexString.includes('earthh'));

// returns true if the given string includes substring given in argument from given position otherwise false
console.log(indexString.includes('earth', 7));
console.log(indexString.includes('earth', 30));

// returns true if the given string starts with substring given in argument otherwise false
console.log(indexString.startsWith('Hello'));
console.log(indexString.startsWith('ello'));

// returns true if the given string ends with substring given in argument otherwise false
console.log(indexString.endsWith('planet'));
console.log(indexString.endsWith('plane'));


let getSubString = 'JavaScript';

// returns substring from index 2 to 5 excluding 5
console.log(getSubString.slice(2,5));

// returns substring from index 2 till the end
console.log(getSubString.slice(2));

// returns substring from 5th index from last, ends at 1st index from last(excluding 1st from last)
console.log(getSubString.slice(-5,-1));

// returns substring from index 2 to 6 excluding 6
// substring(a,b) anf substring(b,a) returns same
// substring(a,b) doesn't support negative indices
console.log(getSubString.substring(2,6));
console.log(getSubString.substring(6,2));

// returns substring having 4 characters from index 2
console.log(getSubString.substr(2,4));

// returns substring having 2 characters from index 4th from last
console.log(getSubString.substr(-4,2));


