function returnDummyPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("start of promise");
            let randomNum = Math.random();
            if(randomNum>0.5){
                resolve("Success");
            }
            else{
                reject("Failure");
            }
        }, 1000);
    });
}

async function consumePromise(){
    console.log("start of consumePromise");

    try {
        const result = await returnDummyPromise();
        console.log(result);
        console.log("end of consumePromise");
    } catch (error) {
        console.log(error);
    }

    
}

consumePromise();

console.log("end of file");