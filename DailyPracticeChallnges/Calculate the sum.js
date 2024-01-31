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
        if (Array.isArray(current)) {
            return sum + sumOfArray(current);
        }
        return sum + current;


    }, 0)

}
const findTotal = sumOfArray(nestedArray2);
console.log(findTotal);


// using Reduce method again 

const qArray = [4, 5, [7, [1], 8], 7];

function achieveSum(arr) {

    return arr.reduce((sum, current) => {

        if (Array.isArray(current)) {
            return sum + achieveSum(current);

        }

        return sum + current

    }, 0)


}
console.log(achieveSum(qArray));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// again for more practice 

const firstArray = [4, 5, [7, [1], 8], 7];

function secondArray(arr) {

    return arr.reduce((sum, current) => {

        if (Array.isArray(current)) {
            return sum + secondArray(current);

        }
        return sum + current;


    }, 0)

}

const collectSum = secondArray(firstArray);
console.log(collectSum);


// again for more practice  2 

const givenArray = [4, 5, [7, [1], 8], 7];

function findAllSum(arr) {

    return arr.reduce((sum, current) => {

        return Array.isArray(current) ? sum + findAllSum(current) : sum + current;
    }, 0)

}


const getSum = findAllSum(givenArray);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const addArray = [4, 5, [7, [1], 8], 7];

function sumOfAll(arr) {


    return arr.reduce((sum, current) => {

        return Array.isArray(current) ? sum + sumOfAll(current) : sum + current;

    }, 0)


}

const getAnswer = sumOfAll(addArray);
console.log(getAnswer);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const fourArray = [4, 5, [7, [1], 8], 7];

function plusArray(arr) {

    return arr.reduce(() => {

        if (Array.isArray(current)) {

            return sum + plusArray(current);

        }

        return sum + current;

    }, 0);

}

console.log(plusArray(fourArray));



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// find the sum of all values in an array containing both negative and positive numbers 



const numbers = [-2, 5, -8, 10, -3];

const sumofArray = numbers.reduce((sum, current) => {

    if (current > 0) {
        return sum + current;

    } else {
        return sum;

    }


}, 0)
console.log(sumofArray);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// again same 

const numbers2 = [-2, 5, -8, 10, -3];

const findTheSum = numbers2.reduce((sumValue, currentValue) => {

    return currentValue > 0 ? sumValue + currentValue : sumValue;


}, 0);

console.log(findTheSum);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Reverse a String:

function reverseString(str) {

    return str.split('').reverse().join('');

}


console.log(reverseString("hello"));

///////////////////////////////////////////////////////////////////////////////////////////

// 2. Palindrome Check:

function thisIsPalindrome(str) {

    const checkIf = str.split('').reverse().join('');

    return str === checkIf;

}

console.log(thisIsPalindrome("racecar"));


///////////////////////////////////////////////////////////////////////////////////////////


for (let i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(i);
    }


}

///////////////////////////////////////////////////////////////////////////////////////////

// 4. Factorial:


const Factorial = (x) => {
    if (x === 0 || x === 0) {
        return 1;

    }

    return x * Factorial(x - 1);

}
console.log(Factorial(5));


///////////////////////////////////////////////////////////////////////////////////////////



// 8. Maximum Subarray:

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = nums[0];
let currentSum = nums[0];

for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum); // Output: 6


///////////////////////////////////////////////////////////////////////////////////////////


let x = 15;

if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is less than or equal to 10");
}


///////////////////////////////////////////////////////////////////////////////////////////

let number = 7;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


///////////////////////////////////////////////////////////////////////////////////////////

let number33 = 7;

let result = (number33 > 0) ? "Positive" : (number33 < 0) ? "Negative" : "Zero";
console.log(result);


///////////////////////////////////////////////////////////////////////////////////////////

let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else if (num % 3 === 0) {
    console.log("Divisible by 3 only");
} else if (num % 5 === 0) {
    console.log("Divisible by 5 only");
} else {
    console.log("Not divisible by 3 or 5");
}

///////////////////////////////////////////////////////////////////////////////////////////

for (let i = 1; i <= 5; i++) {
    console.log(i);
}



///////////////////////////////////////////////////////////////////////////////////////////


let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}



///////////////////////////////////////////////////////////////////////////////////////////


let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


///////////////////////////////////////////////////////////////////////////////////////////

// Looping through an array:


let array = [10, 20, 30, 40, 50];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

///////////////////////////////////////////////////////////////////////////////////////////

// Nested loops:
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}


///////////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < 5; i++) {
    let row = "";

    for (let j = 1; j <= 1; j++) {
        row += "*";

    }
    console.log(row);

}


///////////////////////////////////////////////////////////////////////////////////////////


// Loop control statements:

for(let i = 1; i<=10; i++){
    if(i === 5){
        break;
    }
    console.log(i);

}

///////////////////////////////////////////////////////////////////////////////////////////

let person = {

    name:"Bhagwan",
    age:32,
    job:"Developer"
    
};

for(let key in person){
    console.log(`${key} : ${person[key]}`);

}


///////////////////////////////////////////////////////////////////////////////////////////


let colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}


///////////////////////////////////////////////////////////////////////////////////////////

const removeDuplicates = (str) => {

 return [...new Set(str)];

}


///////////////////////////////////////////////////////////////////////////////////////////

let originalArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = originalArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueArray); // [1, 2, 3, 4, 5]


///////////////////////////////////////////////////////////////////////////////////////////

function countVowels(str){

    let vowels = ["a","e","i","o","u"];
    count++;


    for(let char of str.toLowerCase()){

        if(vowels.includes(char)){
            count++
        }


    };

    return count;

};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];

let removeDuplicates1 = arrayWithDuplicates.reduce( (accumletter, current) =>{
            if(!accumletter.includes(current)){
                accumletter.push(current)
            }
return accumulator;
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arrayDupli = [1, 2, 3, 4, 2, 3, 5];

let findLarge = arrayDupli.reduce( (acc, current)=> {
    if(!acc.includes(current)){
        acc.push(current)

    }
    return acc
})

///////////////////////////////////////////////////////////////////////////////////////////////

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];
console.log(uniqueChars);


///////////////////////////////////////////////////////////////////////////////////////////////

let chars1 = ['A', 'B', 'A', 'C', 'B'];

let findUniue = chars1.filter( (e, index) => {
    return chars1.indexOf(e) === index;

});

console.log(findUniue);

///////////////////////////////////////////////////////////////////////////////////////////////

let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];


function removeD(elem){
return arr.filter( (item, index) =>arr,indexOf(item) ===index);

}
console.log(removeD(elem));


///////////////////////////////////////////////////////////////////////////////////////////////

const unsorted =[1,2,3,4,5,6];

const result44 = unsorted.sort((a,b) => b-a);
console.log(result44);



///////////////////////////////////////////////////////////////////////////////////////////////

let issarray = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray1 = [];

 for(let value in issarray){
    if(!uniqueArray1.includes(value)){
        uniqueArray1.push(value)
    }
};
console.log(uniqueArray1);




///////////////////////////////////////////////////////////////////////////////////////////////


let users = [
    { firstname: 'John', lastname: 'Doe', age: 25 },
    { firstname: 'Alice', lastname: 'Smith', age: 30 },
    { firstname: 'Bob', lastname: 'Johnson', age: 22 }
];

// list of full names

// const output = users.map( (x) =>x.firstname +" "+ x.lastname);

// console.log(output);

// const findOut = users.reduce( (acc, curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];

//     }
//    return acc;

// },{});

// console.log(findOut);


// splice REMOVE
let array = [1,2,3,4,5];

let result6 = array.splice(2,1)
console.log(result6);

// SPLICE REPLACING 

let array = [1, 2, 3, 4, 5];

array.splice(2,2,"R","Y");

// SPLICE adding  

let array = [1, 2, 3, 4, 5];
Array.splice(2,0,"j","J")




//////////////////////////////////////////////////////////////////////////////////////////////////////

let users = [
    { firstname: 'John', lastname: 'Doe', age: 25 },
    { firstname: 'Alice', lastname: 'Smith', age: 30 },
    { firstname: 'Bob', lastname: 'Johnson', age: 22 }
];

const output = users.filter( (x) =>x.age > 20)
.map( (x) => x.firstname);

console.log(output);


//////////////////////////////////////////////////////////////////////////////////////////////////////

// finding square root 


let squareRootFind = 1600;

let result = Math.sqrt(squareRootFind);

console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// genarate random number 

let createNum = Math.floor(Math.random() * 100);

console.log(createNum);

//////////////////////////////////////////////////////////////////////////////////////////////////////



let x = Math.floor((Math.random() * 10) + 1);
console.log(x);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// object distructuring 

const course = {
    coursname:"js in hindi",
    price:"232",
    instructor:"hitesh"
}

const {coursname} = course
console.log(coursname);



//////////////////////////////////////////////////////////////////////////////////////////////////////

// checking is plaindrome \\

let givenStr = "level";


let isThisPalindrome = (value) => {
    return value.split('').reverse().join('') === givenStr;
    
}

console.log(givenStr);



// checking is plaindrome

function isPalindrome1(str){

    let reverse = str.split('').reverse().join('');

    return reverse === str ? "This is example of Palindrome String!" : "This is not Palindrome string Example!";

}

console.log(isPalindrome1("Level"));
console.log(isPalindrome1("salamn"));



// remove duplicates from an array in JavaScript

// let array2 = [1, 2, 3, 4, 4, 5, 6, 6];

// let removeDupl = [...new Set(array2)];

// console.log(removeDupl);


// using diffrent method 

// let removeDupl = array2.reduce( (acc, curr) => {
//     if(!acc.includes(curr)){
//         acc.push(curr);

//     }
//     return acc;
// }, []);


let array2 = [1, 2, 3, 4, 4, 5, 6, 6];

let removeTheDuplicates = array2.reduce( (accumulator, current) => {

    if(!accumulator.includes(current)){
        accumulator.push(current);
    }

    return accumulator;
},[]);

console.log(removeTheDuplicates);



// using filter method 

let arrayy = [1, 2, 3, 4, 4, 5, 6, 6];

const findRight = arrayy.filter( (value,index,self) => {
    return self.indexOf(value) === index;


});
console.log(findRight);


// find maximum number in an array 

let inputArray = [10,20,30,50,95,85,55,45];

let findMaximumNumber = inputArray.reduce( (max, currentValue) => {
    return max > currentValue ? max : currentValue;


});
console.log(findMaximumNumber);


// using for loop \\

let numbers1 = [3, 7, 1, 9, 5, 2, 8, 4, 6];

let max = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {

    if (numbers1[i] > max) {

        max = numbers1[i];
  }
};

console.log("The maximum value is:", max);


///////////////////////////////////////////////////////

const arrayWithDuplicates = [1, 2, 3, 1, 2, 4, 5];

const removeDuplicates2 = arrayWithDuplicates.filter( (value,index,self) => self.indexOf(value) === index)

console.log(removeDuplicates2);




///////////////////////////////////////////////////////

const arrayWithDuplicatesnew = [1, 2, 3, 1, 2, 4, 5];

const arrayWithDuplicatesNew = arrayWithDuplicatesnew.reduce( (acc, curr) => {

    if(!acc.includes(curr)){
        acc.push(curr);

    }

    return acc

},[]);

console.log(arrayWithoutDuplicates);





///////////////////////////////////////////////////////////////////////////////////////////

let numbers1 = [3, 7, 1, 9, 5, 2, 8, 4, 6];

let max = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {

    if (numbers1[i] > max) {

        max = numbers1[i];
  }
};

console.log("The maximum value is:", max);


////////////////////////////////////////////////////////////////////////////


let finNew = [3, 7, 1, 9, 5, 2, 8, 4, 6];

let maxResult = 0;

for(let i =0; i <finNew.length; i++){

    if(finNew[i] > max){
        max = finNew[i];

    }
};
console.log("The maximum value is:", max);


////////////////////////////////////////////////////////////////////////////


// genarate random number 

let createNum22 = Math.floor(Math.random() * 100);

console.log(createNum22);


function countVowels(str){

    let vowels = ["a","e","i","o","u"];
    count++;


    for(let char of str.toLowerCase()){

        if(vowels.includes(char)){
            count++
        }


    };

    return count;

};


const nestedArray2 = [4, 5, [7, [1], 8], 7];

function sumArray(str){


    return arr.reduce( (sum,current) => {
        if(Array.isArray(curr)){
            return sum + sumArray(current);
        }
        return sum + current;

    },0)
};


const getResult = sumArray(nestedArray2);
console.log(getResult);



/////////////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM content to be fully loaded before attaching the event handler
    var myButton = document.getElementById('myButton');

    function handleClick() {
        alert('Button clicked!');
    }

    myButton.addEventListener('click', handleClick);
});


/////////////////////////////////////////////////////////////////////////////////////////////////////


function reverseString(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
  }
  

  /////////////////////////////////////////////////////////////////////////////////////////////////////


  function countVowels(str){

    let vowels = ["a","e","i","o","u"];
    count++;


    for(let char of str.toLowerCase()){

        if(vowels.includes(char)){
            count++
        }


    };

    return count;

};


/////////////////////////////////////////////////////////////////////////////////////////////////////

function countVowels2(){

    let vowels = ["a","e","i","o","u"];
    count++;

    for(let char of countVowels2()){

        if(char.includes(char)){
            count++
        }
    };

    return count;
    

};

/////////////////////////////////////////////////////////////////////////////////////////////////////


let isNew = [3, 7, 1, 9, 5, 2, 8, 4, 6];

let max2 = 0;

for(let i =0; i <finNew.length; i++){

    if(isNew[i] > max2){
        max2 = isNew[i];

    }
};
console.log("The maximum value is:", max2);



/////////////////////////////////////////////////////////////////////////////////////////////////////////

let array4 =  [3, 7, 1, 9, 5, 2, 8, 4, 6];

let large = 0;

for(let i=0; i<array4.length;i++){
    
    if(array4[i] > large){
        large = array4[i];

    }
}
console.log("The maximum value is:", max2);


////////////////////////////////////////////////////////////////////////////////////////

const obj = { a: 1, b: 2 };

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
    obj.c = 3;
}


////////////////////////////////////////////////////////////////////////////////////////


// Calculate the sum of odd numbers greater than 10 and less than 30 

sum = 0;

for (let i = 11; i <= 30; i += 2) {

    sum += i;
}

console.log(sum);

////////////////////////////////////////////////////////////////////////////////////////

const nestedArray2 = [4, 5, [7, [1], 8], 7];

function sumOfArray(arr) {

    return arr.reduce((sum, current) => {
        if (Array.isArray(current)) {
            return sum + sumOfArray(current);
        }
        return sum + current;


    }, 0)

};

// Palindrome Check:  

function isPalindrome(str) {

    const isYesPalindrome = str.split('').reverse().join('');

    return str === isPalindrome;

}

console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));


////////////////////////////////////////////////////////////////////////////////////////