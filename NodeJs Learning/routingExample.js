const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
  console.log("Request was made: " +req.url);
  if(req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  else if(req.url === '/contact') {
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }
  else if(req.url === '/api/persons') {
    var persons = [{name: 'Vimarsh', age: 21}, {name: 'Yash', age: 20}]
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(persons));
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/pageNotFound.html').pipe(res);
  }
});

server.listen(8080);