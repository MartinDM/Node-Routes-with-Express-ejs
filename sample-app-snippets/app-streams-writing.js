var http = require('http');
var fs = require('fs');

// createReadStream inherits from event emitter so we can use 'data' event 
var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8'); 
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf-8')
 
// Reading data a small bit at a time, splitting it up and passing it on to 'readStream'
readStream.on('data', function(chunk){
    console.log(chunk)
    // creates the file and writes to it.
    
    // Written a bit at a time rather than using fs.writeFile method
    writeStream.write(chunk)
});
