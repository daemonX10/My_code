const person = {
    first : "damodar",
    last  : "yadav",
    age   : 30
}


function ageInDays(person,callback){
    const fullName=person.first + person.last;
    const ageInDays = person.age*365;
    callback(fullName,ageInDays);
}

function logResult(fullName){
console.log(`The person's is ${fullName} + and their age in days is ${ageInDays}`)
};

ageInDays(person,logResult);