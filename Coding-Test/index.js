//   Reverse a String:

function reverseString(str) {
    return str.split("").reverse().join("");
}

const reversed = reverseString("Hello");
console.log(reversed);

// Find the Missing Number:

function findMissingNumber(nums) {
    const n = nums.length + 1;
    const sum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return sum - actualSum;
}

const missingNumber = findMissingNumber([3, 0, 1]);
console.log(missingNumber);

// for loop / if else use

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Buzzfizz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

// Palindrome Checker:

function isYes(str) {
    const reversedStr = str.split("").reverse().join("");

    return str === reverseString;
}
console.log(isYes("racecar"));




//findMaxNumber 

const numbers = [10, 5, 8, 9, 88];
const maxNum = findMaxNumber(numbers);

console.log("this is max number: ", maxNum);


function findMaxNumber(arr) {
    return Math.max(...arr);

}

// is palindrome or not 

function yesPalindrome(str) {

    const result = str.split("").reverse().join("");

    return str === result;



}

console.log(yesPalindrome("Hello"));


////agian palindrome 

function palinDrome(str) {

    const myOpration = str.split(" ").reverse().join("");

    return str === myOpration;


}

console.log(palinDrome("racecar"));


// Write a JavaScript program to reverse a given string. 

function reverseStringReduce(str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}


function filterEvenNum(num) {
    return arr.filter(number => number % 2 === 0);

}

var numbers1 = [10, 5, 6, 55, 88, 45];

var evenNumbers = filterEvenNum(numbers);

console.log


// Write a JavaScript function to check if a given number is prime. 

function isPrimeNumber(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % 1 === 0) return false;
    }

    return true;
}

console.log(isPrimeNumber(6));


// using setTime out 

function displayQuestion(question) {
    console.log("Question :" + question);

}

function moveToNext() {
    console.log("moving to next Question :");

}

const question1 = 'which is the capital of india?';
const question2 = 'who wrote this book?';


displayQuestion(question1);

setTimeout(moveToNext, 3000);

// aagian do this 

const q1 = 'who is this? ';
const q2 = 'whi is this man ?';


function display1(q) {
    console.log("yes this" + q);

}


function display2() {
    console.log("this is 2");

}
display1(q1);


setTimeout(display2, 2000);


//  3rd example 

function myFunction() {
    console.log("Timeout completed!");

}

setTimeout(myFunction, 3000);

// 4 

setTimeout(function () {
    console.log("this will be print after given time");


}, 3000);


// How can you pass arguments to the function inside setTimeout? 

setTimeout(function (arg1, arg2) {
    console.log(arg1 + arg2);

}), 3000, " hello im first ", "Hello im 2nd";





// closure 


function outerFunction() {

    let imOuterVariable = "i Am a outer function's Variable!";


    function innerFunction() {

        console.log(imOuterVariable);

    }
    return innerFunction;

}


const closure = outerFunction();

closure();


// Closures are often used in callback functions.  

function doSomeThingAsync(callback) {

    setTimeout(function () {
        console.log("task completed!");
        callback();

    }), 3000;
}

doSomeThingAsync(function () {
    console.log("callback executed.");

});

// agian 

function thisAsync(callback){

    setTimeout(function(){

        console.log("executing started!");
        callback();

    }),3000;
}
thisAsync(function(){
    console.log("callback executed!");

});


// map 



const hisNumbers = [4,5,6,7,9,6];
const squareNumbers = hisNumbers.map((num) => num * num);

console.log(squareNumbers);


// filter 

const numbers2 = [2,5,5,6,5,4,2];

const outputNum = numbers2.filter((num) => num % 2 === 0);

console.log(outerFunction);

const theseAre = [5,6,7,8,9,10,12,16];


// 3 
const result = theseAre
.filter((num) => num % 2 === 0)
.map((num) => num * num)
.reduce((acc,current) => acc + current, 0);

console.log(result);

//  map 

const rtRt = [1,2,3,4,5,6];

const SquaredNumbers = rtRt.map(function(num){
return num * num ;

});

console.log(squareNumbers);

// 
const filterNum = [2,3,4,5,6,7,8];
const evenNumbers = filterNum.filter(function(num){
return num % 2 === 0;

})

console.log(evenNumbers);