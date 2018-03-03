var http = require('http');
var fs = require('fs');

// createReadStream inherits from event emitter so we can use 'data' event 
var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');

 
// Reading data a small bit at a time, splitting it up and passing it on to 'readStream'
readStream.on('data', function(chunk){
    console.log('new chunk:'); 
    console.log(chunk); 
});
