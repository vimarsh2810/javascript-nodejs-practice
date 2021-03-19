// A, B, C will be printed randomly

// let printString = (string) => {
//   setTimeout( () => {
//     console.log(string);
//   }, Math.floor(Math.random()*100));
// }

// let printAll = () => {
//   printString('A');
//   printString('B');
//   printString('C');
// }


// A, B, C will be printed in chronological order using callback

/*let printString = (str, callback) => {
  setTimeout( () => {
    console.log(str);
    callback();
  }, Math.floor(Math.random()*100) )
}

let printAll = () => {
  printString('A', () => {
    printString('B', () => {
      printString('C', () => {
      })
    })
  })
}*/


// A, B, C will be printed in chronological order using promise

// let printString = (str) => {
//   return new Promise((resolve, reject) => {
//     setTimeout( () => {
//       console.log(str);
//       resolve()
//     }, Math.floor(Math.random()*100) )
//   })
// }

// let printAll = () => {
//   printString('A')
//   .then(() => {
//     return printString('B')
//   })
//   .then(() => {
//     return printString('C')
//   })
// }


// A, B, C will be printed in chronological order using Async/Await

// async function printAll() {
//   await printString('A');
//   await printString('B');
//   await printString('C');
// }

printAll();