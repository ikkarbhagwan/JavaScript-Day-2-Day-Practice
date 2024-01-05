//   Reverse a String:

function reverseString(str) {
    return str.split('').reverse().join('');
}


const reversed = reverseString('Hello');
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
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    }
    else {
        console.log(i);

    }


}

// Palindrome Checker:

function isPalindrome(str){
    const reverseString = str.split(" ").reverse().join("");
    return str === reverseString;

}
console.log(isPalindrome("level"));

