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
        reject('Could not fetch the data!');
      }
    });

    request.open('GET', path);
    request.send();

  });

};

getTodos('https://jsonplaceholder.typicode.com/todos/55')
.then((data) => {
  console.log('Promise resolved: ', data);
})
.catch((err) => {
  console.log('Promise rejected: ', err);
})