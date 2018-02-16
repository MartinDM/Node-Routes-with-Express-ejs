const helpers = require('./modules/helpers');

// Methods now on helpers we imported
console.log ( helpers.counter([1,2,4,5,7]) );
console.log ( helpers.adder(1,7) );
console.log ( helpers.adder(2, helpers.pi) );

var time = 0;
var timer = setInterval(() => {
    time += 2;
    console.log(  time + ' secs have passed' )
    if (time > 4){ 
        clearInterval(timer)
        console.log(  'more than 4' )
    }
}, 2000);

consoles();
function consoles() {
    console.log(__dirname);
    console.log(__filename);
}

