// Coding challenge #5: Calculate the sum of numbers from 1 to 10

let sumOfNumbers = 0;

for (let i = 0; i <= 10; i++) {
    sumOfNumbers += i;
}

console.log(sumOfNumbers);

// Coding challenge #6:  Calculate the sum of odd numbers greater than 10 and less than 30

let sum = 0;

for (let i = 11; i <= 30; i + 2) {
    sum + i;
}

console.log(sum);

// 2.

let oddEven = 0;

for(let i = 11; i<30; i+2){
    sum+=i;

}


console.log(oddEven);

// Create a function that will convert from Celsius to Fahrenheit 

function CelsiusToFharenheit(i){
    return n * 1.8 * 32;

}

let r = CelsiusToFharenheit(i);

console.log(r);

// Calculate the sum of numbers in an array of numbers

function sumArray(ar)
{
    let sum1 = 0;
    
    for(let i = 0; i < ar.length; i++)
    {
        sum1 += ar[i];
    }
    
    return sum;
}

let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum1 = sumArray(ar);
console.log(sum);

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

function filterPositiveNum (){
    return sumOfNumbers.filter(function(number){
        return number >0 ;

    })
}

let array = [-1,-2,-3,4,6,78];
let resultArray= filterPositiveNum(array);
