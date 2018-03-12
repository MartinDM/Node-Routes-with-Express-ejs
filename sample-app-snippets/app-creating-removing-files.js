 

var fs = require('fs');
var path = require('path');
var glob = require("glob")

//fs.unlink('');
// Creating/removing directories

// Synchronously make and remove directories
//fs.mkdirSync('people');
//fs.rmdirSync('people');

var Person = function(name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
}
 
// Anything created with Person construcor inherits the custom event 
// util.inherits accepts the object and the thing inherited

var martin = new Person('Martin', '28', 01);
// var jane = new Person('Jane', '30', 02);
// var baz = new Person('Baz', '35', 03);
var people = [ martin ];

const directory = './people/';
    
console.log(people);

// Asynchronous method.
// Take array of people and make text files for them
fs.mkdir('people', function(){
    people.forEach( (person) => {
        fs.readFile('readme.txt', 'utf-8', function(err, data){
            fs.writeFile(directory + person.id + '-' + person.name + '.txt', data + person.name)
        })
    }) 
});


var deleteTextFiles = function(){
    fs.readdir(directory, (err, files) => { 
        for (const file of files) {
            console.log(file)
            fs.unlink( file, () => {})
        }
    })
}

fs.unlink('./people/1-Martin.txt', function(){
    console.log('unlinked')
    fs.rmdir('people')
});

// delete the text files 
//deleteTextFiles();

