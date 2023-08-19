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