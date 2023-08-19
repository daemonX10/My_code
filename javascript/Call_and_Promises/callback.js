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

function function1(){
    console.log("Execution function 01");
}

function function2(callback){
    console.log("execution function 02");
}

function2(function1);

// logging function
// function customLogging(message,level="info"){
//     const loggingFunction = console[level] || console.log;
//     loggingFunction(`[${level.toUpperCase()} ${message}]`)
// }

// customLogging("Custom log message");



// Asynchronous Operations
console.log("start");
setTimeout(()=>{
    console.log("setTimeout is being executed");
},2000);
console.log("end");


// Nested Callbacks

setTimeout(function (){
    console.log("executing Function 01");
    setTimeout(function(){
        console.log("execution of Function 02");
        setTimeout(function (){
            console.log("executing function 03");
        },1000);
    },1000);
},1000);

