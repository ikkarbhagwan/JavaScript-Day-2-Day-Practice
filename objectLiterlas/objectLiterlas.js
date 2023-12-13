// object litterlas 

const person = {
    myName : "Bhagwan",
    age : 23,
    "job Title" : "developer" //using string as a key 
}

// we can acces values via Dot notation and square bracet notation as well 

document.write(person.myName + "<br>");
document.write(person["age"]);

// nested objects 

let nestedObject = {
    property1 : "value1",
    nestedObject: {
        property2 :'value 2',
        property3 : "value 3"
    }
};


//You can include a function as a proprty values,  creating methods within the objects

let cart = {
Grocery : "oil",
fashion : "cloths",
start : function(){
    console.log("Engine Start");
    

}
};

console.log(cart);