const http = require('http');
const fs = require('fs');

var server = http.createServer(
    (req, res) => {
        /* req = details about the request
           res = instructions of our response */
        
        console.log('request made: ' + req.url)  

        if( req.url === '/home' || req.url === '/' ){    
            // Tells the browser what to do with our response
            res.writeHead(200, {'Content-Type': 'text/html'}) 
            // Reading from a readable stream, to pipe to writable stream 
            fs.createReadStream(__dirname + 'views/index.html', 'utf-8').pipe(res);  

        } else if ( req.url === '/json') {

            var martinObj = {
                name: 'Ryu',
                job: 'Ninja',
                age: '30',
                skill: 'Krav maga'
            }
            
             res.writeHead(200, {'Content-Type': 'application/json'})
             // this method wants a STRING or a BUFFER
             res.end( JSON.stringify(martinObj) );

        } else if ( req.url === '/contact' ) { 
            res.writeHead(200, {'Content-Type': 'text/html'}) 
            fs.createReadStream(__dirname + 'views/contact.html', 'utf-8').pipe(res); 
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'}) 
            fs.createReadStream(__dirname + 'views/404.html', 'utf-8').pipe(res); 
        }
    }
);

// Listen on a port on localhost
server.listen(3000, '127.0.0.1');
console.log('Listening up!')