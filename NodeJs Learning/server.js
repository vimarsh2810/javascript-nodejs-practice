var http = require('http')
var fs = require('fs')
var port = 8080
var host = '127.0.0.1'

// http.createServer(function(req,res) {
//   res.writeHead(200, {'Content-type': 'text/html'})
//   res.end("Welcome to the server!")
// }).listen(port, host)

// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   var readStream = fs.createReadStream(__dirname + '/chunk.txt', 'utf8');
//   readStream.pipe(res);  
// }).listen(port, host);

// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//   readStream.pipe(res);   
// }).listen(port, host);

var person = {
  name: "vimarsh",
  age: 21,
  id: '17CP062'
};

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(person));  
}).listen(port, host);