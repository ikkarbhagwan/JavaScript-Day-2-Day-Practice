

// oprations with strings 


const airLine = 'Tap air portugul';
const plane = 'A322';

console.log(plane[0]);
console.log(plane[2]);
console.log('AIrLine'[1]);

console.log(airLine.length);

// indexOf method

console.log(airLine.indexOf('i'));
console.log(airLine.lastIndexOf('i'));

// SliceMoethod 

console.log(airLine.slice(2));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1))
console.log(airLine.slice(-2));
console.log(airLine.slice(1, -2));



// removes the elements how we give 


const cheackMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat !!');
    else console.log('You are lucky !!');


}
cheackMiddleSeat('11B');
cheackMiddleSeat('23C');
cheackMiddleSeat('3E');


// remove duplicates elements from given :

let myArray = [10, 22, 32, 10, 22, 31, 11, 10];

// let mySolutionOfArray = [...new Set(myArray)];
// console.log(mySolutionOfArray);


// using filter method 


// let result = myArray.reduce((acc, currentValue) => {
//     if (!acc.includes(currentValue)) {
//         acc.push(currentValue);

//     }
//     return acc;
// }, []);


// console.log(result);


// find out using for loop 

let given = [10, 222, 22, 11, 11, 55, 66, 44, 12, 222];

const uniqueArray = [];

for (let i = 1; i < given.length; i++) {

    const currentElemnt = given[i];

    if (!uniqueArray.includes(currentElemnt)) {

        uniqueArray.push(currentElemnt);

    }

};

console.log(uniqueArray);


// 2. time again for more understanding

let array1 = [1, 2, 3, 4, 5, 6, 7, 1, 2, 4, 8, 5];

let result1 = [];

for (let i = 1; i < array1.length; i++) {
    const newVar = array1[i];


    if (!result1.includes(newVar)) {

        result1.push(newVar)
    }
};

console.log(result1);

// 3. Removing duplicate element from an Array : 

const input = [10, 12, 14, 12, 10, 12, 15, 16, 12, 15];

const inputResult = [];

for (let i = 1; i < input.length; i++) {

    if (!inputResult.includes(input[i])) {
        inputResult.push(input[i]);

    }

}

console.log(inputResult);

