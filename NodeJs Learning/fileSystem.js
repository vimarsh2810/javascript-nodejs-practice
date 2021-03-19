const fs = require('fs')

// fs.writeFile('writefile.js', 'console.log("File written")', function(err) {
//   console.log("File written")
// })

// fs.appendFile('writefile.js', '\nconsole.log("Content appended")' ,function(err) {
//   console.log("File appended")
// })

// fs.unlink('writefile.js', function(err) {
//   console.log("File deleted")
// })

// fs.rename('writefile.js', 'renamedFile.js', function(err){
//   if(err) throw err
//   console.log('File renamed')
// })

// fs.mkdir('NewDirectory', function(err) {
//   console.log('Directory created')
// });

// fs.rmdir('NewDirectory', function(err) {
//   console.log('Directory deleted')
// });

fs.mkdir('NewDirectory', function() {
  fs.writeFile('./NewDirectory/newFile.txt', "xyz" ,function(errr) {
    console.log('File writter');
  })
})