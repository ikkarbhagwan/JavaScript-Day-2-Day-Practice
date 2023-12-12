
// objects litrals 

let person = {
    name: "Bhagwan",
    age: 23,
    sayhello: function () {
        console.log(`hello , my name is ${this.name} And My age is ${this.age} years old..`);
    }
};
person.sayhello();

// Using classes
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  let john = new Person("John", 25);
  john.sayHello();