const http = require('http');

var server = http.createServer(
    (req, res) => {
        /* req = details about the request
           res = instructions of our response */
        
        console.log('request made: ' + req.url) 

        // Tells the browser what to do with our response
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end( '<p>Hey Ninja!</p>' );
    }
);

// Listen on a port on localhost
server.listen(3000, '127.0.0.1');

console.log('Listening up!')