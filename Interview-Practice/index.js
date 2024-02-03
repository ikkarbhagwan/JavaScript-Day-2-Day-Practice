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



