// let p=fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(p);
// p
// .then(function exec(response){
//     return response.json();
// })
// .then(function printResult(result){
//     console.log(result);
// })
// .catch((err)=>
//     console.log(err)
// );

/**
 * The function fetchData uses the fetch API to make an asynchronous request to a JSON API and logs the
 * response data to the console.
 */
async function fetchData(){
    const response=await
    fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data= await response.json();
    console.log(data);
}
console.log("main function is waiting for response ");
fetchData();