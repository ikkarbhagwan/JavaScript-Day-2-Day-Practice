

// using type of oprtaor



let num = 55;
let str = "Name";
let boolean = true;
let arr = [1, 2, 3, 4];
let function1 = function () { };
let obj = { ckye: "value" };

console.log(typeof num);
console.log(typeof str); console.log
console.log(typeof boolean);
console.log(typeof function1);
console.log(typeof arr);
console.log(typeof undefinedVariables);


////////////////////////////////////////////////////////////////////////////////////////

// Type Coercion in Javascript

let number = 55;
let string = "52";
let boolean1 = true;


console.log(string + number);
console.log(number == string);
console.log(boolean == 1);


////////////////////////////////////////////////////////////////////////////////////////


// Operator Precedence in Javascript

let a = 12;
let b = 3;
let c = 4;

let result = a + b * c + (a - b);


console.log(result);
// = 33


////////////////////////////////////////////////////////////////////////////////////////

// Unary - Binary - Ternary Operators in Javascript

let w = 5;

let w2 = -a;
console.log(b);
console.log(++a);


////////////////////////////////////////////////////////////////////////////////////////////

// ?reverse a string 
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example
  console.log(reverseString("hello")); // Output: "olleh"
  

  ////////////////////////////////////////////////////////////////////////////////////////////

//   Check for Palindrome 

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  // Example
  console.log(isPalindrome("racecar")); // Output: true
  

    ////////////////////////////////////////////////////////////////////////////////////////////

    // Challenge 3: Find the Factorial

    function Factorial (){

    }


    ////////////////////////////////////////////////////////////////////////////////////////////

    // Remove Duplicates from an Array 

    function RemoveDuplicates (){
        return [...new set(arr)];

    }
    console.log(RemoveDuplicates([1,1,2,3,3,4,5,6,7]));

    ////////////////////////////////////////////////////////////

    function genMultiplicationTable(){
      let tableRows  = [];

      for (let i = 1; i <= 10; i++) {
        let row = `7 * ${i} = ${7 * i}`;
        tableRows.push(row);
      }

      return tableRows;
    }

    const multiplicationTable = generateMultiplicationTable();
    console.log(multiplicationTable);

    ////////////////////////////////////////

    for(let i = 1; i <= 10; i++)
{
let row = `7 * ${i} = ${7 * i}`;   
    console.log(row);
}
