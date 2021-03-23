const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const getTodos = (path) => {

  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      }
      else if(request.readyState === 4) {
        reject("Could not fetch data!");
      }
    });

    request.open('GET', path);
    request.send();

  });

};

getTodos('https://jsonplaceholder.typicode.com/todos/1')
.then((data) => {
  console.log('Promise 1 resolved: ', data);
  return getTodos('https://jsonplaceholder.typicode.com/todos/2');
})
.then((data) => {
  console.log('Promise 2 resolved: ', data);
  return getTodos('https://jsonplaceholder.typicode.com/todos/3');
})
.then((data) => {
  console.log('Promise 3 resolved: ', data);
  return getTodos('https://jsonplaceholder.typicode.com/todos/4');
})
.then((data) => {
  console.log('Promise 4 resolved: ', data);
})
.catch((err) => {
  console.log('Promise rejected: ', err);
});