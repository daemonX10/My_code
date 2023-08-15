//  prototypes

function Person(name,age){
    this.name=name; // name is property
    this.age=age;

}

const john=new Person("john",36);
console.log(john);

function Person1(name){
    this.name=name;
}

// adding a method to the Person1 prototype
Person1.prototype.sayHello = function(){
    console.log("Hello, my name is " + this.name);
    
}

Person1.prototype.age=0;

var damodar=new Person1("damodar");
// damodar.sayHello()
// console.log(damodar.age)

/* adding a method to the Array and string prototype: */
// uses
String.prototype.strLength=function(){
    return this.length;
}
Array.prototype.arrlength=function(){
    return this.length
    }

console.log("john".strLength());
console.log([1,2,3,5,6,7].arrlength());

