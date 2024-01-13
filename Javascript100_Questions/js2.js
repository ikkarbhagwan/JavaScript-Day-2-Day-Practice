// // Resverse a string 

// function ResverseString(str) {
//     return str.split('').reverse().join('');

// }
// console.log(ResverseString("hello"));


// // // Resverse a string 

// function ResverseString(str) {
//     return str.split('').reverse().join();

// }
// console.log(ResverseString("Hello"));

// // fizzBuzz

// // Print numbers from 1 to n.
// // For multiples of 3, print "Fizz" instead.
// // For multiples of 5, print "Buzz" instead.
// // For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     let output = '';

//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     console.log(output || i);


// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     if (i % 5 === 0) {
//         console.log("Buzz");

//     } else {
//         console.log("FizzBuzz");
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {


//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Yahoo");
//     } else if (i % 3 === 0) {
//         console.log("Baaba");
//     }
// }
// ////////////////////////////////////////////////////////////////////////////////////////////

// // Challenge 3: Find the Factorial

// function Factorial() {


// }


// ////////////////////////////////////////////////////////////////////////////////////////////

// // Remove Duplicates from an Array 

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// // Example
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


// ////////////////////////////////////////////////////////////////////////////////////////////

// // new challnges \

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// ////////////////////////////////////////////////////////////////////////////////////////////

// // Closures in Js

// function x() {
//     var a = 7;
//     function Y() {
//         console.log(a);
//     }
//     Y();

// }
// x();

// // 2

// function init() {
//     var name = "sudha";
//     function displayName() {
//         console.log(init);
//     }
//     displayName();
// }
// init();

// // Scoping with let and const

// if (Math.random() > 0.5) {
//     var x = 1;
// } else {
//     var x = 2;

// }
// console.log(x);


// ////////////////////////////////////////////////////////////////////////////////////////////


// if (Math.random() > 0.5) {
//     const x = 2;
// } else {
//     const x = 4;
//     s

// }
// console.log(x);


// ////////////////////////////////////////////////////////////////////////////////////////////

// // closures in js 

// function makefun() {
//     const name = "Bhagwan";

//     function displayGame() {
//         console.log(name);

//     }
//     return displayGame();
// }

// const myfun = makefun();
// myfun();

// /////////////////////////////////////////////////////////////////////////////////////////////////////

// // Array Destruction 

// let book = ["Adavnce Js", 200, 150, [2023, "ikkar"]];

// // let name = book[1];
// // let price = book[1];
// // let pages = book[2]; 

// let [name, price = 150, pages, [year, surname]] = book;
// console.log(year);

/////////////////////////////////////////////////////////////////////

// Students according to their scores 
const grade = 56;


if (grade <= 100 && grade >= 80) {
    console.log("you got A score..");
} else if (grade <= 89 && grade >= 70) {
    console.log("You got B score..")

} else if (grade <= 69 && grade >= 60) {
    console.log("You got C score..")
} else if (grade <= 59 && grade >= 50) {
    console.log("You got D score ..")
} else {
    console.log(" You are fail in exam ..")
};

// 

let array1 = [12, 12, 45, 654, 45, 45, 6645, 5];

let maxNumber = Math.max(...array1);

console.log(maxNumber);


// 

let array12 = [12, 12, 45, 654, 45, 45, 6645, 5];

let maxNumber2 = array1[0];

for (let i = 1; i < array12.length; i++) {
    if (array1[i] > maxNumber2) {
        maxNumber2 = array1[i];
    }
}

console.log(maxNumber2);


///////////////////////////////////////////////////////



let mArray = [10, 65, 9, 86, 11, 10, 10, 10];

let resultMyArray = mArray.reduce((acc, curr) => curr < 40 ? acc + curr : acc, 0);

console.log(resultMyArray);


////////////////////////////////////////////
// No of exp.  
let employee = [
    {
        name: "Bhagwan",
        exp: 2
    },
    {

        Fname: "krishna",
        exp: 3

    },

    {
        Fname: "mahesh",
        exp: 5
    },

    {
        Fname: "suresh",
        exp: 5
    }
];

// chaining mathods 

let findWorkExperince = employee.filter(employee => employee.exp > 3 && employee.Fname).map(employee => employee.Fname);
console.log(findWorkExperince);


// FInd average Age 
let familyPersons = [
    {
        name: "Bhagwan",
        age: 23
    },
    {

        Fname: "krishna",
        age: 65

    },

    {
        Fname: "mahesh",
        age: 56
    },

    {
        Fname: "suresh",
        age: 25
    }
];


let findAverageAge = familyPersons.reduce((acc, curr) => acc + curr.age, 0);
console.log(findAverageAge);

let totalAvg = findAverageAge / familyPersons.length;
console.log(totalAvg);


///////////////////////////////////////////////////////////
//  find occurance of distinct elements 

let thisAre = [

    "a", "b", "c", "d",
     "e", "a", "c", "e"

];

const findOccurance = thisAre.reduce((acc, curr) => curr in acc ? {...thisAre, [curr]: acc [curr] + 1}:{...thisAre, [curr] : 1} ,{})
console.log(findOccurance);

///////////////////////////////////////////////////////////////
// reverse the string 

let inputString = "i want to be specail in javascript";

function myString(){

let result = inputString.split("").reverse().join(" ");
console.log(result);


}
myString();



///////////////////////////////////////////////////////////////
// prototypal inheritance 

const hisAdmin ={
    haslicence:false,
}

const admin = {
isAdmin :true,
__proto__:hisAdmin,

};


let myname = {

    firstName : "bhagwan",
    lastName :"ikkar",
    __proto__: admin,
}

console.log(myname.haslicence);

