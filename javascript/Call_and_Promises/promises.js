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

// function timeConsumingTask(){
//     for(let i=0;i<10000000;i++){
//         // code
//     }
// }

// console.log("start");
// timeConsumingTask();
// console.log("start the timer");
// setTimeout(function exec(){//  this will wait for 10sec than print it output , not in between disturbance
//     console.log("timer completed")
// },10000);

// console.log("end");

function returnDummyPromise(){
    return new Promise( function(resolve,reject){
        // write your code here
        // let randomNumber=Math.random();
        //     console.log(randomNumber);
        //     if(randomNumber>0.5){
        //         resolve("this promise is resolved . The number is greater than 0.5");
        //     }
        //     else{
        //         reject("The promise is rejected . The number is lesser than 0.5");
        //     }
    
        for(let i=0;i<1000000000;i++){
            // code
            if(i==100000000){
                resolve("this promise is resolved ");
            }
        }
        
    })
}

let p=returnDummyPromise();
p
.then(function executeOnResolve(data){
    console.log(data);
})
.catch(function executeOnReject(err){
    console.log(err);
})
console.log("end");