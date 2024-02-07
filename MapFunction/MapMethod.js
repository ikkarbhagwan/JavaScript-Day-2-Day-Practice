// map data strucuture decalared 

// const Question = new Map([
//     ['Question', 'which is best programming language in the world ?'],
//     [1, 'c'],
//     [2, 'java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'correct'],
//     [false, 'try again!']
// ]);

// console.log(Question);

// // Quiz app 

// console.log(Question.get('Question'));

// for(const [key, value] of Question){
//     if(typeof key === 'number') console.log(`Your answer ${key} : ${value}`)
// };
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(Question.get(Question.get('correct') === answer));

// // convert map to Array 

// console.log([...Question]);3

// ///////////////////////////

// // Mapping array elements
// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map((num) => {
//     return num * num;
// });

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]



// // filter 

// let filterTheArray = [10,20,30,40,50,60,70,80,90,100];

// let updateFilter = filterTheArray.filter(num => num % 3 === 0);
// console.log(updateFilter);



////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let theGivenArray = [1,2,3,4,5,6,5,2,4,8];

// const findUniqueValues = theGivenArray.filter( (value,index) => theGivenArray.indexOf(value) === index);

// console.log(findUniqueValues);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let theGivenArray = [1,2,3,4,5,6,5,2,4,8];

// const answerThe = theGivenArray.filter( (value, index) => theGivenArray.indexOf(value) === index);

// console.log(answerThe);


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// using reduce method

let theGivenArray = [1,2,3,4,5,6,5,2,4,8];

const findCorrect = theGivenArray.reduce((acc,currentValue) => {

    if(!acc.includes(currentValue)){
        acc.push(currentValue);

    }
    return acc;
    
},[] );

console.log(findCorrect);

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Using Set:

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray);



////////////////////////////////////////////////////////////////////////////////////////////////////////////


function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));



////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isPalindrome(str){

    const reversd = str.split('').reverse().join('');

    return str === reversd;
    
};

console.log(isPalindrome('racecar')); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Find the Maximum Number in an Array:
let numbers = [4, 2, 7, 1, 9];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max); // Output: 9


////////////////////////////////////////////////////////////////////////////////////////////////////////////

let words = ["apple", "banana", "cherry"];
let upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords); // Output: ["APPLE", "BANANA", "CHERRY"]


