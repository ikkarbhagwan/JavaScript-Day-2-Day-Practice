// //  Calculate the sum of numbers from 1 to 10

// let sumOfNumbers = 0;

// for (let i = 0; i <= 10; i++) {
//     sumOfNumbers += i;
// }

// console.log(sumOfNumbers);

// // /Calculate the sum of odd numbers greater than 10 and less than 30

// let sum = 0;

// for (let i = 11; i <= 30; i + 2) {
//     sum + i;
// }

// console.log(sum);

// // 2.

// let oddEven = 0;

// for (let i = 11; i < 30; i + 2) {
//     sum += i;

// }


// console.log(oddEven);

// // Create a function that will convert from Celsius to Fahrenheit 

// function CelsiusToFharenheit(i) {
//     return n * 1.8 * 32;

// }

// let r = CelsiusToFharenheit(i);

// console.log(r);

// // Calculate the sum of numbers in an array of numbers

// function sumArray(ar) {
//     let sum1 = 0;

//     for (let i = 0; i < ar.length; i++) {
//         sum1 += ar[i];
//     }

//     return sum;
// }

// let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// let sum1 = sumArray(ar);
// console.log(sum);

// // Create a function that receives an array of numbers and returns an array containing only the positive numbers

// function filterPositiveNum() {
//     return sumOfNumbers.filter(function (number) {
//         return number > 0;

//     })
// }

// let array = [-1, -2, -3, 4, 6, 78];
// let resultArray = filterPositiveNum(array);


// // 2. 

// function filterPosNum(num1) {
//     return num1.filter(function (num2) {
//         return num2 > 0;

//     });


// }

// let inputArray = [2, -6, -8, 9, -6, - 9, 8 - 8, -8,];

// let resultArray2 = filterPosNum(inputArray);

// console.log(resultArray2);

// // Coding challenge : Find the maximum number in an array of numbers

// function findMaxNum(give) {

//     let max = [0];

//     for (let i = 0; i < give.length; i++) {
//         if (i = 0; )
//     }
// }


// // Coding challenge: Rotate an array to the right 1 position

// let myArray = [1, 2, 3, 4];

// function myArray() {
//     let last = myArray.push();
//     myArray.unshift(last);

// }

// // Revesr an Array 


// let q = [5, 4, 6.5, 8, 9, 6];
// q.reverse();
// console.log(q);

// // Reverse a string 

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// let originalString = "Hello, World!";
// let reversedString = reverseString(originalString);
// console.log(reversedString);


// // Find the Maximum Number 

// function findMax(numbers) {
//     return Math.max(...numbers);

// }
// console.log(findMax([1, 2, 3, 4, 5, 6]));


// ////////////////////////////////////////////////


// const age = 10;

// if (age >= 18) {
//     console.log(`sarah is ready to get license..`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Srrah is too young try after ${yearsLeft} years!`);
// }

// // 2nd Century example
// const birthYear = 2021;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 22;
// }
// console.log(century);


// // Print the odd numbers less than 100 

// for (i = 1; i < 100; 1 + 2) {

//     console.log(i);
// }


// // Print the multiplication table with 7 

// for (i = 1; i <= 10; i++) {
//     let row = 7 * i;
//     console.log(row);
// }


// // Print all the multiplication tables with numbers from 1 to 10 

// for (let i = 1; i <= 10; i++) {
//     console.log(i);

// }


// function printTable(n) {

//     for (let i = 1; i <= 10; i++) {
//         let row = n * i;
//         console.log(row);
//     }

// };


// // Calculate the sum of numbers from 1 to 10 

// let sumNum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum6 += i;

// }

// console.log(sumNum);


// //Calculate the sum of odd numbers greater than 10 and less than 30


// let sumOdd = 0;

// for (let i = 1; i <= 10; i += 2) {
//     sum += 1;
// }

// console.log(sumOdd);


// // Palindrome Check: 

// function cheakPalindrome(str) {

//     const reverseStr = str.split('').reverse().join('');

//     return str === reverseStr;

// }

// console.log(cheakPalindrome("radar"));


// // Palindrome Check:  
// function isPalindrome(str) {

//     const isYesPalindrome = str.split('').reverse().join('');

//     return str === isPalindrome;

// }

// console.log(isPalindrome("radar"));
// console.log(isPalindrome("hello"));


// // flatten Array challange 

// function flattenArray(arr) {
//     return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
// }

// const nestedArray = [1, [2, [3, 4], 5]];
// console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5]

// //   Maximum Element in Array: 

// function findMaxElement(arr) {
//     return Math.max(...arr);

// }

// const numbers = [9, 6, 5, 6, 7, 89, 9, 87, 85, 5, 6];

// console.log(findMax(numbers));

// // using math.max and spred oprator 

// let largeNum = [2, 3, 4, 5, 6, 7, 8, 88];
// let findNum = Math.max(...largeNum)
// console.log(largeNum);



// // Anagram Check: 

// function areAnagrams(str1,str2){
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');

//     return sortedtStr1 === sortedStr2;
// }
// console.log(areAnagrams("listen", "silent"));
// console.log(areAnagrams("hello", "silent"));


// // using math.max and spred oprator 

// let larNum1 = [4,5,8,7,5,5,6];

// let getNum = Math.max(...larNum1);

// console.log(getNum);


// // thisPalindrome 


// let thisPalindrome ="aca";
// let thisPalindrome1="";

// for(let i=thisPalindrome.length-1; i>-1; i-- )
// {
//     thisPalindrome1=thisPalindrome1+thisPalindrome[i]

// }
// console.log(thisPalindrome1)

// if(thisPalindrome1===thisPalindrome){
//     console.log("this is plaindroome string")
// }
// else{
//     console.log("this is not plaindroome string")
// }



// // using fucnctional method 
// function isPalindrome (str){

//     const yesIsPalindrome = str.split().reverse().join("");
//     str === isPalindrome;

// }

// console.log(isPalindrome("Racecar"));
// console.log(isPalindrome("ratecar"));


// // . use of switch statement

// let day = "kayny";

// switch (day){
//     case "monday":
//     console.log("this is school day");
//     break;

//     case "tuesday":
//     console.log("this is school day");
//     break;

//     case "wendensday":
//     console.log("this is school day");
//     break;

//     case "thursday":
//     console.log("this is school day");
//     break;

//     case "friday":
//     console.log("this is school day");
//     break;

//     case "saturday":
//     console.log("this is school day");
//     break;

//     case "sunday":
//     console.log("this is school day");
//     break;

//     default :
//     console.log("Go to school ");

// }

//  Javascript Date methods 

// let now = new Date('march 23 2023');

// console.log(now.getMinutes());
// console.log(now.getMilliseconds());


// console.log(now.toDateString());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getFullYear());


// set date methods 

let date = new Date();
date.setFullYear(2022);
console.log(date); // Updated date with the year 2023

let date1 = new Date();
date1.setMonth(12); // Note: Months are zero-based, so 11 is December
console.log(date1); // Updated date with December


let e = new Date();
e.setDate(15);
console.log(e); // Updated date with the 15th day of the month


//  Real life example 

let printDate = new Date('feb 12 12');

console.log(printDate.getDate() + "/" + printDate.getMonth() + "/" + printDate.getFullYear() + "/");


/////////////////////////////////////////////////////////////////////////////////////


// Calculate the sum of odd numbers greater than 10 and less than 30


let sum = 0;

for (let i = 11; i <= 30; i += 2) {
    sum += i;
}

console.log(sum);

// Calculate the sum of odd numbers greater than 10 and less than 30 

sum = 0;

for (let i = 11; i <= 30; i += 2) {

    sum += i;
}

console.log(sum);


// Create a function that will return a Boolean specifying if a number is prime 

function isPrime(n) {
    if (n < 2)
        return false;

    if (n == 2)
        return true;

    let maxDiv = Math.sqrt(n);

    for (let i = 2; i <= maxDiv; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

println(2, " is prime? ", isPrime(2));
println(3, " is prime? ", isPrime(3));
println(4, " is prime? ", isPrime(4));
println(5, " is prime? ", isPrime(5));
println(9, " is prime? ", isPrime(9));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const obj = { a: 1, b: 2 };

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
    obj.c = 3;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
    console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const user = {

    name: 'John Doe',

    email: 'john.doe@example.com',

    age: 25,

    dob: '08/02/1989',

    active: true
};

// iterate over the user object

for (const key in user) {

    console.log(`${key}: ${user[key]}`);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event handling : 

<button id="demo"></button>

const button = document.getElementById('demo');

button.addEventListener('click', function () {
    alert("im cliked ")
})



// async / await 

const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        const numberRandome = Math.floor(Math.random() * 10);


        // resolve the promise 

        if (numberRandome < 5) {
            resolve("success!v randome number : " `${numberRandome}`)
        }

        // reject the promise

        else {
            reject("Error! randme number : " `${numberRandome}`);

        }


    }, 1000);

    myPromise
        .then((result) => {
            console.log(result);
        })

        .catch((error) => {
            console.log(error);

        });



})


// Example 1: Array manipulation
let fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];

// Print the original array
console.log('Original array:', fruits);

// Add an element to the end of the array
fruits.push('Mango');
console.log('Array after adding Mango:', fruits);


fruits.pop();
console.log('Array after removing the last element:', fruits);

// Example 3: Object as a data structure
let person = {
    name: 'John Doe',
    age: 25,
    city: 'Example City'
};

// Accessing and modifying object properties
console.log('\nPerson details:', person);
console.log('Name:', person.name);
console.log('Age:', person.age);

// Modifying the age property
person.age = 26;
console.log('Updated age:', person.age);

// Adding a new property
person.gender = 'Male';
console.log('Updated person details:', person);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// calculate the sum of all the elements in the nested array 

const nestedArray = [4, 5, [7, [1], 8], 7];


function sumNestedArray(arr) {
    let sum3 = 0;

    for (i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {

            sum3 += sumNestedArray(arr[i];)
        } else {
            sum3 += arr[i];

        }
    }
    return sum;


}

const totalSum = sumNestedArray(nestedArray);
console.log(totalSum);


// using Reduce method 

const nestedArray2 = [4, 5, [7, [1], 8], 7];

function sumOfArray(arr) {

    return arr.reduce((sum, current) => {
        if(Array.isArray(current)){
            return sum + sumOfArray(current);
        }
        return sum + current;


    }, 0)

}
const findTotal = sumOfArray(nestedArray2);
console.log(findTotal);


