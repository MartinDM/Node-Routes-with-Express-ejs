var http = require('http');
var fs = require('fs'); 

var server = http.createServer(
    (req, res) => {
        /* req = details about the request
           res = instructions of our response */
        
        console.log('request made: ' + req.url) 
        
        // Tells the browser what to do with our response
        res.writeHead(200, {'Content-Type': 'application/json'})

        var martinObj = {
            name: 'Martin',
            job: 'Ninja',
            age: '30',
            skill: 'Krav maga'
        }

        // this method wants a STRING or a BUFFER
        res.end( JSON.stringify(martinObj) );
    }
); 

// Listen on a port on localhost
server.listen(3000, '127.0.0.1');