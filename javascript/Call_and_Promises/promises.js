// Runtime environment
function timeConsumingTask(){
    for( let i=0;i<100000;i++){
        // some task
        if(i==1)console.log("money");
    }
}

console.log("start");
timeConsumingTask();
console.log("end");

console.log("starting the timer");
setTimeout(function exec(){
    console.log("timer completed");
},1000);
console.log("exiting the timer");
timeConsumingTask();