const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const getTodos = (path, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    }
    else if(request.readyState === 4) {
      callback("Could not fetch data!", undefined);
    }
  });

  request.open('GET', path);
  request.send();
};

getTodos('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log(data);
    getTodos('https://jsonplaceholder.typicode.com/todos/2', (err, data) => {
      if(err) {
        console.log(err);
      }
      else {
        console.log(data);
        getTodos('https://jsonplaceholder.typicode.com/todos/3', (err, data) => {
          if(err) {
            console.log(err);
          }
          else {
            console.log(data);
            getTodos('https://jsonplaceholder.typicode.com/todos/4', (err, data) => {
              if(err) {
                console.log(err);
              }
              else {
                console.log(data);
              }
            });
          }
        });
      }
    });
  } 
});