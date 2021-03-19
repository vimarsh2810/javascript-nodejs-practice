let person = {
  name: 'Vimarsh',
  age: 21,
  id: '17CP062'
}

console.log(person)
console.log(JSON.stringify(person))
// console.log(JSON.stringify(true))

let arr = '[1,2,3,4]';
arr = JSON.parse(arr);
console.log(arr[1]);

let userData = '{ "name": "Vimarsh", "age": 21, "arr": [0,1,2,3] }';

userData = JSON.parse(userData);
console.log(userData);

