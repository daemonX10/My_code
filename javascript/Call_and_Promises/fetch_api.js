let p = fetch("https://type.fit/api/quotes");
p.then(function execute(response){ // converting in the json format so browser don't block the request
    return response.json();
})
.then(function printResult(result){
    console.log(result);
})
