var counter = function(arr) {
    return arr.length + ' elements in this array'
}

var adder = function(a, b){
    return `Sum of those is ${a+b}`;
}

var pi = 3.14;

module.exports = {
    adder: adder,
    counter: counter,
    pi: pi
}

/* Or each can be assigned as an export at the point of definition
eg.
module.exports.pi =  3.14;

*/