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