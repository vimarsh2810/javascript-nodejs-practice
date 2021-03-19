
let Vimarsh = {
  name: 'Vimarsh',
  age: 21,
  ID: '17CP062'
}

let Yash = {
  name: 'Yash',
  age: 21,
  ID: '17IT463'
}

let map = new Map();
map.set(Vimarsh, 7.37);
map.set(Yash, 7.2);

console.log(map)
console.log(map.get(Vimarsh));
console.log(map.has(Yash));
console.log(map.size);

for(let key of map.keys()) {
  console.log(key);
}

for(let value of map.values()) {
  console.log(value);
}

for(let entry of map)
{
  console.log(entry);
}

let students = new Map();
students.set(1, 'Vimarsh')
students.set(2, 'Yash')

students.forEach((value, key, map) => {
  console.log(`${key}: ${value}`)
});