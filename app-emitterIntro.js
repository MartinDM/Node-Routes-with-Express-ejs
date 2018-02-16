var events = require('events');
var helpers = require('./modules/helpers');
var emitter = new events.EventEmitter();

emitter.on('thatEvent', function(msg){
    console.log(msg)
});

// Passing event and message manually to trigger the event
emitter.emit('thatEvent', 'emitted this message!!');