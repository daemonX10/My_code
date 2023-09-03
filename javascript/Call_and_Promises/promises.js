// // Runtime environment
// function timeConsumingTask(){
//     for( let i=0;i<100000;i++){
//         // some task
//         if(i==1)console.log("money");
//     }
// }

// console.log("start");
// timeConsumingTask();
// console.log("end");

// console.log("starting the timer");
// setTimeout(function exec(){
//     console.log("timer completed");
// },1000);
// console.log("exiting the timer");
// timeConsumingTask();

function timeConsumingTask(){
    for(let i=0;i<10000000;i++){
        // code
    }
}

console.log("start");
timeConsumingTask();
console.log("start the timer");
setTimeout(function exec(){//  this will wait for 10sec than print it output , not in between disturbance
    console.log("timer completed")
},10000);

console.log("end");
