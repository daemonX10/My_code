const person = {
    fName:"anuj",
    LName:"kumar",
    get fullName(){
        return ( this.fName + " " + this.LName);
    }
}

console.log(person.fullName);

const person1={
    firstName:"Anuj",
    LastName:"kumar",
    set fullName1(name){
        const parts=name.split(" ");
        console.log(parts);
        this.firstName=parts[0];
        this.LastName=parts[1];
    }
}

person1.fullName1="rohan sharma";
console.log(person1.firstName);
console.log(person1.LastName);