console.log('Spread operator');

let arr1 = [1,2,3,4]
console.log(Math.max(...arr1))


console.log('Rest operator');

function add(...args) {
  let sum = 0;
  for(let arg of args) {
    sum += arg;
  }
  console.log(sum);  
}

add(1,2,3,4,5,6,7)