// // Write a function that takes in an array of integers and a callback function, and returns a new array where each
// // element is doubled using the callback.

// arr=[1,2,3,4,5,6,7,8,9,10];

// function make_double(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i]*2;
//         console.log(arr[i]);    
//     }
// }

// function double(arr,fun){
//     fun(arr);
// }

// double(arr,make_double);

arr=[1,2,3,4,5,6,7,8,9,10];

function doubleArray(arr,callback){
    const doubledArr= arr.map(function numbers(num){
        return callback(num);
    });
    return doubledArr;
}

function callback(num){
    num=num*2;
    return num;
}

const result = doubleArray(arr, callback);
console.log(result);