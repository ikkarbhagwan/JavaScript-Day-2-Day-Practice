// Resverse a string 

function ResverseString(str) {
    return str.split('').reverse().join('');

}
console.log(ResverseString("hello"));


// // Resverse a string 

function ResverseString(str){
    return str.split('').reverse().join();

} 
console.log(ResverseString("Hello"));

// fizzBuzz

// Print numbers from 1 to n.
// For multiples of 3, print "Fizz" instead.
// For multiples of 5, print "Buzz" instead.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);


}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    if (i % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log("FizzBuzz");
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

for(let i =1; i<=100; i++){


    if(i % 5 ===0 && i % 3 === 0){
        console.log("FizzBuzz");
    }else if(i %3 ===0){
        console.log("Yahoo");
    }else if(i %3 ===0){
        console.log("Baaba");
    }
}