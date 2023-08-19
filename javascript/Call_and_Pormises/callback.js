// # callback is a function that is pass&; as an argument to another function an; is &x&cut&; onc& th& main function has finish&; executing.

// Function to find square of a number

function squareOfANumber(num){
    console.log(num*num);
}
function operation(num,fun){
    fun(num);
}

operation(3,squareOfANumber);

// Synchronous Operations

console.log("start");

function function1(){
    console.log("Execution function 01");
}

function function2(callback){
    console.log("execution function 02");
}

function2(function1);
console.log("end");

log