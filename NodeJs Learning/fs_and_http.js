const http = require('http')
const fs = require('fs')
http.createServer(function(req,res) {
  fs.readFile('fileSystem.js', function(err, data){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(8080)