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

const numbers =[10,5,8,9,88];
const maxNum= findMaxNumber(numbers);

console.log("this is max number: ", maxNum);


function findMaxNumber(arr){
return Math.max(...arr);

}

// is palindrome or not 

function yesPalindrome(str){

    const result = str.split("").reverse().join("");

    return str === result;



}

console.log(yesPalindrome("Hello"));


////agian palindrome 

function palinDrome(str){

    const myOpration = str.split(" ").reverse().join("");

    return str === myOpration;


}

console.log(palinDrome("racecar"));


// Write a JavaScript program to reverse a given string. 

function reverseStringReduce(str){
    let reversedString = '';

    for(let i = str.length -1;i >=0; i-- ){
        reverseString+=str[i];
    }
    return reverseString;
}


function filterEvenNum (num){
    return arr.filter(number => number% 2 ===0);

}

var numbers1 = [10,5,6,55,88,45];

var evenNumbers = filterEvenNum(numbers);

console.log


// Write a JavaScript function to check if a given number is prime. 

function isPrimeNumber(num){
    if(num <= 1) return false;

    for(let i = 2 ; i <= Math.sqrt(num); i++){
        if(num % 1 ===0)return false;
    }
    
    return true;
}

console.log(isPrimeNumber(6));


// using setTime out 

function displayQuestion(question){
    console.log("Question :" + question);

}

function moveToNext(){
    console.log("moving to next Question :");

}

const question1 = 'which is the capital of india?';
const question2 = 'who wrote this book?';


displayQuestion(question1);

setTimeout(moveToNext, 3000);

// aagian do this 

const q1= 'who is this? ';
const q2 = 'whi is this man ?';


function display1(q){
    console.log("yes this"+ q);

}


function display2(){
    console.log("this is 2");

}
display1(q1);


setTimeout(display2, 2000);

