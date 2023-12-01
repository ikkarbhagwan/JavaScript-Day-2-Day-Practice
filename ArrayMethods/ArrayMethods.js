// push():

// Description: Adds one or more elements to the end of an array.

const numbers = [1, 2, 3];
numbers.push(4, 5);
// Result: [1, 2, 3, 4, 5]


// pop():
//  Removes the last element from the end of an array.


const numbers = [1, 2, 3];
const removedElement = numbers.pop();
// Result: removedElement = 3, numbers = [1, 2]



// shift():
// Removes the first element from the beginning of an array.

const numbers = [1, 2, 3];
const removedElement = numbers.shift();
// Result: removedElement = 1, numbers = [2, 3]



// unshift() : Adds one or more elements to the beginning of an array.


const numbers = [2, 3];
numbers.unshift(0, 1);
// Result: numbers = [0, 1, 2, 3]




// concat() Combines two or more arrays
const numbers1 = [1, 2];
const numbers2 = [3, 4];
const combined = numbers1.concat(numbers2);
// Result: combined = [1, 2, 3, 4]



// slice():Extracts a portion of an array without modifying the original.

const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 4);
// Result: sliced = [2, 3, 4], numbers = [1, 2, 3, 4, 5]
