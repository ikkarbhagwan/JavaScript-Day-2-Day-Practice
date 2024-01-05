//   Reverse a String:

function reverseString(str) {
    return str.split('').reverse().join('');
}


const reversed = reverseString('Hello');
console.log(reversed); 
