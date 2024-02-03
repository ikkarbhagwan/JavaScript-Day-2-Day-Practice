function checkPalindrome(str) {

    const reversedStr = str.split("").reverse().join('');
    return str === reversedStr;


}

console.log(checkPalindrome("aca"));



///////////////////////////////////////////////////////////////////////////////////////////////////

function checkIsThisString(str) {

    return str.split('').reverse().join("");


}

console.log(checkIsThisString("Hello mam"));



///////////////////////////////////////////////////////////////////////////////////////////////////

function fizBuzz() {
    for (let i = 0; i <= 100; i++) {

        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBizz");

        } else if (i % 5 === 0) {
            console.log("Fizz");

        } else if (i % 3 === 0) {
            console.log("Buzz");

        } else {
            console.log(i);

        }

    }

}

console.log(fizBuzz());



///////////////////////////////////////////////////////////////////////////////////////////////////

function findMaximumNumberInArray(str) {

    return Math.max(...str);


}

console.log(findMaximumNumberInArray([1, 2, 4, 5, 6, 8, 9, 5, 8, 8]));


///////////////////////////////////////////////////////////////////////////////////////////////////

const factorial = 5;

let result = 1;

for (let i = 1; i <= factorial; i++) {

    result = result * i;

};

console.log(result);


///////////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// Output: [2, 4]



///////////////////////////////////////////////////////////////////////////////////////////////////


const numbers1 = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num ** 2);
const squaredNumbers = numbers1.map(num => num ** 3);

console.log(squaredNumbers)

// Output: [1, 4, 9, 16, 25]


///////////////////////////////////////////////////////////////////////////////////////////////////



const numbers2 = [1, 2, 3, 4, 5];
// const sum = numbers2.reduce((acc, num) => acc + num, 0);
const sum = numbers2.reduce((acc, current) => {
    return acc + current;

});

console.log(sum);

// Output: 15



///////////////////////////////////////////////////////////////////////////////////////////////////


const chaningMethods = [2, 4, 6, 8, 12, 16];

const resultMethods = chaningMethods.filter((num) => num % 3).map(num => num ** 2);

console.log(resultMethods);



///////////////////////////////////////////////////////////////////////////////////////////////////


const array = [1, 2, 3, 2, 4, 5, 1];

const removeDuplicatesFromArray = array.reduce((acc, cuurentValue) => {
    if (!acc.includes(cuurentValue)) {
        acc.push(cuurentValue);

    }
    return acc;
}, []);

console.log(removeDuplicatesFromArray);


///////////////////////////////////////////////////////////////////////////////////////////////////



// using set method 

const array1 = [1, 2, 3, 2, 4, 5, 1];

const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray);




///////////////////////////////////////////////////////////////////////////////////////////////////


const array = [1, 2, 3, 2, 4, 5, 1];

const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArray);
