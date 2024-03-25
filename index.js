// index.js

function returnsANamedFunction() {

    function namedFunction() {
    }
    return namedFunction;
}   
// index.js

function returnsAnAnonymousFunction() {
    return function() {
    };
}   
// index.js

function receivesAFunction(callback) {
    callback();
}





