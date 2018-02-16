// node core module. Var name, same as module name
const fs = require('fs');

// Synchronous versions
var readme = fs.readFileSync('readme.txt', 'utf-8');

// Copy the contents and write new file
fs.writeFileSync('newReadme.txt', readme += ' newer stuff')

// Asyncronous methods. Won't block!
fs.readFile( 'node-readme.txt', 'utf-8', function(err, data){ 
    fs.writeFile( 'newReadme.txt', data, () => console.log('done') )
});

console.log('test 1')