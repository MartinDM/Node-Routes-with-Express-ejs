var events = require('events')
var util = require('util')

var Person = function(name){
    this.name = name;
}


// New objects made with 'Person' inherit the emitter
util.inherits(Person, events.EventEmitter);

// Anything created with Person construcor inherits the custom event 
// util.inherits accepts the object and the thing inherited

var martin = new Person('Martin');
var jane = new Person('Jane');
var baz = new Person('Baz');
var people = [  martin, jane, baz]


// Attach listeners to each person. Attaching CUSTOM EVENT to each person
people.forEach( (person) =>{
    // adding a listener
    person.on('speak', function(msg){
        console.log(  person.name + ' said ' +  msg )
    });
});

// Passing event ('speak') and message manually to trigger the event
martin.emit('speak', 'Hello');
jane.emit('speak', 'Hi');

