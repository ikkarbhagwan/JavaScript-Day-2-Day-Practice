function checkPalindrome(str) {

    const reversedStr = str.split("").reverse().join('');
    return str === reversedStr;
    

}

console.log(checkPalindrome("aca"));



///////////////////////////////////////////////////////////////////////////////////////////////////

function checkIsThisString(str){

    return str.split('').reverse().join("");
    

}

console.log(checkIsThisString("Hello mam"));


