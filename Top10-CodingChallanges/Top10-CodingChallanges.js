// write a function that reverse of string ?

function reversedString(str) {

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];

    }
    return reversed;

}

console.log(reversedString("hello"));

// 2.

function getReversed(str) {

    return str.split("").reverse().join("");

}

console.log(getReversed("papa"));



// write a function that return a longest word in sentence 

function returnLongestWord(sentence) {
    const words = sentence.split(" ");
    let longWord = "";

    for(let word of words){
        if(word.length > longWord.length){
            longWord = word;
        }
    }
   return longWord


}

console.log(returnLongestWord("i love my india"));


// check is plaindrome or not


const isPalindrome = (str) =>{

    const reverseSentence = str.split("").reverse("").join("");

    return str = reverseSentence;

}

console.log(isPalindrome("racecar"));

//////////////////////////////////////////////////////////////

function findMaxNumber (arr){

    return Math.max(...arr);

}

console.log(findMaxNumber([12,23,56,86,45,12]));


// Remove Duplicates from an Array:

function removeWrongItems(arr){

    return arr.filter( (item, index) => arr.indexOf(item) === index);

}
console.log(removeWrongItems([12,54,21,54,12,32,45,54]));


// Write a function to flatten a nested array.

function flattenArray(arr){

    return arr.reduce( (acc,currentValue) => Array.isArray(currentValue) ? acc.concat(flattenArray(currentValue)) : acc.concat(currentValue),[]);

}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));


// Check if two strings are anagrams:

function areAnagrams(str1,str2){

    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;

}

console.log(areAnagrams("listen", "silent"));


// Find the Missing Number in an Array:

function findMissingNumber(arr){
    const n = arr.length + 1;
    const sum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce( (acc,cur) => acc + cur, 0);
    return sum - arrSum;

}

console.log(findMissingNumber([1,2,3,4,5,7,8]));
