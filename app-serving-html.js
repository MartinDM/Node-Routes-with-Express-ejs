var http = require('http');
var fs = require('fs');
var http = require('http');

var server = http.createServer(
    (req, res) => {
        /* req = details about the request
           res = instructions of our response */
        
        console.log('request made: ' + req.url)

        // Reading from a readable stream, to pipe to writable stream 
        var readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8'); 
 
        // Tells the browser what to do with our response
        res.writeHead(200, {'Content-Type': 'text/html'})

        /* Sends data to a writeable stream.
           Pipes the read stream to the response, listening for the 'data' event,
           and handling the 'chunking' of the data. 
           Receive data quicker
        */
        readStream.pipe(res); 
    }
); 

// Listen on a port on localhost
server.listen(3000, '127.0.0.1');