function greet(name){
    const p=new Promise (function (resolve){
        resolve(`Hello , ${name}!`);
    })
    return p;
}

greet("damodar")
.then(function executeOnResolve(data){
    console.log(data);
})