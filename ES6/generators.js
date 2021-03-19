function* gen() {
  var x = yield 'apple';
  var y = yield 'banana';
  var z = yield 'mango';
  return x + y + z;
}

let myGen = gen();
console.log(myGen.next());
console.log(myGen.next(10));
console.log(myGen.next(5));
console.log(myGen.next(20));