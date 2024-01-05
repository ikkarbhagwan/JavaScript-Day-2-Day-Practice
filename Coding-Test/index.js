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
