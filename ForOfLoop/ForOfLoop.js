
var obj = {
    firstName : "Bhagwan",
    lastName : "ikkar",
    age : 25,
    Email : "ikkarbhagwan@gmail.com"
};

for(var kye in obj){
    document.write(kye + " " +  ":" + obj[kye] + "<br>");
}


// used for in loop


let main = {
    name: "ikkar",
    age: 23,
    school: "CST school of pune ",
    price: 2455
};

for (var kye in main) {
    document.write(kye + "  " + ":" + main[kye] + "<br>");
}

// for of loop 

const myLuckyNumbers = [1,2,3,4,5,6,7,8];

for(let num of myLuckyNumbers){
    document.write("my Numbers "+  num + "<br>");
}


// 2nd example of for in loop \\

const object = { a: 12, b :13, c: 14};

for(let kye in object){
    document.write(`the kye values are ${kye}` + "<br>");

}

/////////////////////////////////////////////////////
for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break; // exit the loop when i is 3
    }
    console.log(i);
  }
  

//   calc the sum of all elements in array 

const numbers = [1, 2, 3, 4, 5];

let sum = 0 ;

for(let i = 0; i<numbers.length; i++){
    sum += numbers[i];
    }
    console.log(sum);


    ///////////////////////////////////////////


for(let i = 0; i<6; i++){
    let pattern =" ";
    for(let j =1; j<7; j++){
        pattern+="* ";
        

    }
console.log(pattern);

}