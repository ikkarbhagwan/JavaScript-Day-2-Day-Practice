

let object = {
    name: "ikkar Bhagwan",
    age: 23,
    city: "Parbhani",
    getIntro: function () {
        console.log(this.name + "from" + this.age)
    }
}


let object2 = {
    name: "Bhagwan",

}

object2__proto__ = object;
console.log(object2);
object.getIntro();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let company = {
    name: "A",
    pay: function () {
      console.log("Paying");
    },
  }; //company object
  let worker = {
    id: 1,
    work: function () {
      console.log("Working");
    },
  }; //worker object
  worker.__proto__ = company; //worker object inherits company object
  console.log(worker);
  worker.pay(); // calling method from company object using worker object.
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  