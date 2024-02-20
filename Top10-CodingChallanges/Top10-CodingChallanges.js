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

