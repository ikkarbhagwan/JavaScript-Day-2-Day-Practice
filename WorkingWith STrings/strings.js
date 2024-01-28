

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

for (let i = 1; i < given.length; i++){

  const currentElemnt = given[i];

  if(!uniqueArray.includes(currentElemnt)){

    uniqueArray.push(currentElemnt);

  }

};

console.log(uniqueArray);