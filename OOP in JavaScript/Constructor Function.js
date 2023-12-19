'use strict';

const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

}

const jonas = new Person('jonas', 1999);
console.log(jonas);

// 1. a new empty object created 
// 2.function is called , this = {}
// 3. {} linked to prototype 
// 4. function automatically return {} 

const matilda = new Person('matilda', 2013);
const jack = new Person('jack', 2016);

console.log(matilda, jack);

console.log(jonas instanceof Person);

// 2. creating new object using constructor function 

function Women(first,last){
    this.firstName = "first",
    this.lastName = "last"

}

const women1 = new Women("Elon", "Musk");
const women2 = new Women("Bill", "Gates"); // we created another object with women consatructor 

//adding properties to objects 

women1.age =20;
console.log(women1);


women2.price = 45;
console.log(women2.price);


