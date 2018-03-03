var express = require('express');
var fs = require('fs');
var app = express();
// App becomes express function



// Set tpl engine
app.set('view engine', 'ejs')

// Middleware
// Log out the asset url when requesting anything in /assets. Can be empty.
app.use('/assets', express.static('assets'));


// Routes

// Respond to GET requests with route
app.get('/home', function(req, res) {
    //res.sendfile(__dirname + '/views/index.html')
    // res.writeHead(200, {'Content-Type':'text/html'}); 
    res.render('index')
});

app.get('/contact', function(req, res) {
    res.render('contact')
});

// Id is stored on the params of the req object
app.get('/profile/:id', function(req,res) {
    // Old way
    //res.send('You requested page with id:' +  req.params.id )
    var data = { person: req.params.id, age: 31, job: 'Ninja', food: 'Apples', hobbies: [ 'Running', 'Eating', 'Fighting', 'Singing' ]}
    // Using a template
    res.render('profile', { data })
});

app.listen(3000);




// Helpers = ()=>{

//     var uppercase = (str) => {
//         let newStr = '';
//         for ( let i = 0; i < str.length; i++ ) {
//             let code = str.charCodeAt(i);
//             if ( code >= 65 && code <= 90 ){
//                 code -= 32
//             } newStr += String.fromCharCode(code)
//         } return newStr
//     }
// }
 
