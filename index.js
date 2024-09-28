function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    function namedFunction(){
        console.log('I am a named function!');
    }
    return namedFunction;

}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am an annonymous function");
    }
}