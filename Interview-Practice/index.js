function checkPalindrome(str) {

    const reversedStr = str.split("").reverse().join('');
    return str === reversedStr;
    

}

console.log(checkPalindrome("aca"));
