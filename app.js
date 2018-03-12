var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

// Set tpl engine
app.set('view engine', 'ejs')

// Middleware
// Handle request for assets from /assets. Can be empty.
// No need to set up routes for each asset.
app.use('/assets', express.static('assets'));

var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

// Routes
// Respond to GET requests with route
app.get('/', function(req, res) {
    //res.sendfile(__dirname + '/views/index.html')
    // res.writeHead(200, {'Content-Type':'text/html'}); 
    res.render('index')
});

app.get('/contact', function(req, res) { 
    res.render('contact', { qs: req.query })
});

// Handle form post
app.post('/contact', urlencodedParser, function(req, res) {
    // data passed in to the form. Form uses POST, this picks up that request
    console.log(req.body)
    // Make data available in the view
    res.render('contact-success', { data: req.body })
});

// Id is stored on the params of the req object
app.get('/profile/:id', function(req,res) {
    var data = { person: req.params.id, age: 31, job: 'Ninja', food: 'Apples', hobbies: [ 'Running', 'Eating', 'Fighting', 'Singing' ]}
    // Pass in data to the template
    res.render('profile', { data })
});

app.listen(3000);