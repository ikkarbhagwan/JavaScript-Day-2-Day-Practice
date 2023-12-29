 Calculate the sum of numbers from 1 to 10

let sumOfNumbers = 0;

for (let i = 0; i <= 10; i++) {
    sumOfNumbers += i;
}

console.log(sumOfNumbers);

// /Calculate the sum of odd numbers greater than 10 and less than 30

let sum = 0;

for (let i = 11; i <= 30; i + 2) {
    sum + i;
}

console.log(sum);

// 2.

let oddEven = 0;

for (let i = 11; i < 30; i + 2) {
    sum += i;

}


console.log(oddEven);

// Create a function that will convert from Celsius to Fahrenheit 

function CelsiusToFharenheit(i) {
    return n * 1.8 * 32;

}

let r = CelsiusToFharenheit(i);

console.log(r);

// Calculate the sum of numbers in an array of numbers

function sumArray(ar) {
    let sum1 = 0;

    for (let i = 0; i < ar.length; i++) {
        sum1 += ar[i];
    }

    return sum;
}

let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum1 = sumArray(ar);
console.log(sum);

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

function filterPositiveNum() {
    return sumOfNumbers.filter(function (number) {
        return number > 0;

    })
}

let array = [-1, -2, -3, 4, 6, 78];
let resultArray = filterPositiveNum(array);


// 2. 

function filterPosNum(num1) {
    return num1.filter(function (num2) {
        return num2 > 0;

    });


}

let inputArray = [2, -6, -8, 9, -6, - 9, 8 - 8, -8,];

let resultArray2 = filterPosNum(inputArray);

console.log(resultArray2);

// Coding challenge : Find the maximum number in an array of numbers

function findMaxNum(give) {

    let max = [0];

    for (let i = 0; i < give.length; i++) {
        if (i = 0; )
    }
}


// Coding challenge: Rotate an array to the right 1 position

let myArray = [1, 2, 3, 4];

function myArray() {
    let last = myArray.push();
    myArray.unshift(last);

}

// Revesr an Array 


let q = [5, 4, 6.5, 8, 9, 6];
q.reverse();
console.log(q);

// Reverse a string 

function reverseString(str) {
    return str.split('').reverse().join('');
}

let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log(reversedString);


// Find the Maximum Number 

function findMax(numbers) {
    return Math.max(...numbers);

}
console.log(findMax([1, 2, 3, 4, 5, 6]));


////////////////////////////////////////////////


const age = 10;

if (age >= 18) {
    console.log(`sarah is ready to get license..`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Srrah is too young try after ${yearsLeft} years!`);
}

// 2nd Century example
const birthYear = 2021;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 22;
}
console.log(century);


// Print the odd numbers less than 100 

for (i = 1; i < 100; 1+2) {

    console.log(i);
}


// Print the multiplication table with 7 

for(i=1; i<=10; i++){
    let row = 7*i;
    console.log(row);
}


// Print all the multiplication tables with numbers from 1 to 10 

for(let i=1; i<=10; i++){
    console.log(i);

}


function printTable(n){

for(let i =1; i <= 10; i++){
    let row = n*i;
    console.log(row);
}

};


// Calculate the sum of numbers from 1 to 10 

let sumNum = 0;

for(let i =1; i <= 10; i++){
    sum6+=i;

}

console.log(sumNum);


//Calculate the sum of odd numbers greater than 10 and less than 30


let sumOdd = 0;

for(let i =1; i <=10; i+=2)
{
    sum += 1;
}

console.log(sumOdd);


// Palindrome Check: 

function cheakPalindrome(str){

    const reverseStr = str.split('').reverse().join('');

    return str === reverseStr;
    
}

console.log(cheakPalindrome("radar"));


// Palindrome Check:  
function isPalindrome(str){

    const isYesPalindrome = str.split('').reverse().join('');

    return str === isPalindrome;
    
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));


// flatten Array challange 

function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
  }
  
  const nestedArray = [1, [2, [3, 4], 5]];
  console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5]
  
