let cities = ['anand','vadodara','ahmedabad','surat'];

// returns length of the array
console.log(cities.length);

// appends elements at the end of the array
cities.push('rajkot');
console.log(cities);

// removes and returns the last element of the array
console.log(cities.pop());
console.log(cities)

// removes first element of the array and returns it
console.log(cities.shift());
console.log(cities);

// adds element at the beginning of the array
cities.unshift('anand');
console.log(cities);

let citiesCopy = cities;
citiesCopy.push('nadiad');

// changes in the copy appears in the original array
// console.log(citiesCopy);
console.log(cities);


for(let key in cities) {
  console.log(cities[key]);
}

for(let city of cities) {
  console.log(city);
}

console.log(String(cities));

// reverses the order of array, changes in original array
console.log(cities.reverse());
console.log(cities);

// concats 2 or more array and returns a new array

let states = ['gujarat', 'punjab', 'bihar', 'karnataka'];
let result = states.concat(cities);
console.log(result);

// creates an Array Iterator and create a loop that iterates each key/value pair

let it = cities.entries();
for(itr of it) {
  console.log(itr);
}

// checks whether all elements of an array satisfies a condition given as function

function checkLength(city) {
  return city.length > 7;
};

console.log(cities.every(checkLength));

// checks whether any elements of an array satisfies a condition given as function

console.log(cities.some(checkLength));

// fills array with given static array 
let fillArray = [1,2,3,4];
fillArray.fill('filled');
console.log(fillArray);

// returns array filled with elements that pass the filter
console.log(cities.filter(checkLength));

// returns value of first element in the array that passes the filter
console.log(cities.find(checkLength));

// returns index of first element in the array that passes the filter
console.log(cities.findIndex(checkLength));

// returns index of an element given as an argument
console.log(cities.indexOf('ahmedabad'));

// returns last index of an element given as an argument
let fruits = ['apple', 'mango', 'banana', 'apple'];
console.log(fruits.lastIndexOf('apple'));

// returns array as string, separated by delimeter given as argument
console.log(fruits.join());
console.log(fruits.join(';'))

// returns a String representing the values of the array separated by a comma
console.log(fruits.toString());

// calls the provided function once for each element in an array, in order and returns new array
let numArr = [1,2,3,4,5];
function square(numb) {
  return numb*numb;
}
console.log(numArr.map(square));

numArr.reverse();
console.log(numArr);

// sorts array
console.log(numArr.sort((a,b) => a - b));

// returns elements from index 2 to 4 excluding 4
console.log(numArr.slice(2,4));

// adds/removes items to/from an array, and returns the removed item
console.log(numArr.splice(2,1,'abc','xyz'));
console.log(numArr);