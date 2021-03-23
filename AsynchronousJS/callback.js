const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);        
    } else if(request.readyState == 4) {
      callback("Couldn't fetch data", undefined);
    }
  });
  
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
};

console.log('start');

getTodos((err, data) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log(data);
  }
});

getTodos((err, data) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log(data);
  }
});

console.log('end');