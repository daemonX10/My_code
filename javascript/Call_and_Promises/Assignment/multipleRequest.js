// async function getCombineData(){
//     const [data1,data2]= await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>response.json()),
//         fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=>response.json())
//     ]);
    
//     const combineData={
//         todo:data1,
//         post:data2
//     };
//     return combineData;
// }

// getCombineData()
// .then((data)=>
// console.log(data)
// );

// async function getCombineData(){
//     const response1=await
//     fetch("https://jsonplaceholder.typicode.com/todos/1").then((response1)=>
//     response1.json())
//     const response2=await
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((response2)=>
//     response2.json()
//     )
//     const combineData={
//         todo:response1,
//         post:response2
//     }
//     return combineData;
// }

// getCombineData().then((data)=>console.log(data));


async function getCombineData(){
const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json());
const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(response => response.json());

return Promise.all([promise1,promise2])
}

getCombineData().then((data)=>console.log(data[0],data[1]));
