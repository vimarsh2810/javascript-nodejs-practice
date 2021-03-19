const http = require('http');
const fs = require('fs');
const readstream = fs.createReadStream(__dirname + '/chunk.txt', 'utf8');
const writeStream = fs.createWriteStream(__dirname + '/chunk1.txt');


// readstream.on('data', function(chunk) {
//   console.log('\n\n\n\nNew Chunk recieved\n\n\n\n');
//   writeStream.write(chunk);
// });

readstream.pipe(writeStream)