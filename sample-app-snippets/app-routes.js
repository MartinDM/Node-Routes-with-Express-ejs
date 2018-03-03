const http = require('http');
const fs = require('fs');

var server = http.createServer(
    (req, res) => {
        /* req = details about the request
           res = instructions of our response */
         
        if (req.url === '/home' || req.url === '/') {
            res.writeHead(200, {'Content-Type':'text/html'});
            fs.createReadStream(__dirname + '/views/index.html').pipe(res);
        } else if  (req.url === '/contact') {
            res.writeHead(200, {'Content-Type':'text/html'});
            fs.createReadStream(__dirname + '/views/contact.html').pipe(res);
        } else if (req.url === '/api/people') { 
            res.writeHead(200, {'Content-Type':'text/application-json'});
            var martinObj = [{
                name: 'David',
                job: 'Ninja',
                age: '30',
                skill: 'Running'
            }, 
            {
                name: 'Martin',
                job: 'Pirate',
                age: '31',
                skill: 'Krav maga'
            }]
            // Buffer or a string
            res.end(JSON.stringify(martinObj));
            //fs.createReadStream(martinObj).pipe(res)
        } else {
            res.writeHead(200, {'Content-Type':'text/html'});
            fs.createReadStream(__dirname + '/views/404.html').pipe(res);

        }
    }
);

// Listen on a port on localhost
server.listen(3000, '127.0.0.1');

console.log('Listening up!')