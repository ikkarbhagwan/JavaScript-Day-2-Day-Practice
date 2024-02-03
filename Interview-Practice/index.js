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

        }else if (i % 5 === 0) {
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

function findMaximumNumberInArray(str){

    return Math.max(...str);


}

console.log(findMaximumNumberInArray([1,2,4,5,6,8,9,5,8,8]));


///////////////////////////////////////////////////////////////////////////////////////////////////

const  factorial = 5;

let result = 1;

for(let i = 1; i <=factorial; i++){

    result *=i;

};

console.table(result);
