

const is_array = (input) => {

return Array.isArray(input);


}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));




////////////////////////////////////////////////////////////////////////////////////////////


const array_clone = (input) => {

    return input.slice();

}

console.log(array_clone([1, 2, 4, 0]));
console.log(array_clone([1, 2, [4, 0]]));



////////////////////////////////////////////////////////////////////////////////////////////


const first = (n) => {

    return n.slice(1,1);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));




////////////////////////////////////////////////////////////////////////////////////////////

function last(arr,n = 1)
{
    if(n<0){
        return [];


    }

    return arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));       
console.log(last([7, 9, 0, -2], 3));    
console.log(last([7, 9, 0, -2], 6));


////////////////////////////////////////////////////////////////////////////////////////////

// Write a simple JavaScript program to join all elements of the following array into a string.

const myColor = ["Red", "Green", "White", "Black"];


console.log(output2 = myColor.join("+"));
console.log(output2 = myColor.join(","));
console.log(output2 = myColor.join(" "));

////////////////////////////////////////////////////////////////////////////////////////////

// Write a JavaScript program to sort the items of an array.

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr1.sort(function(a,b){
    return a - b;

});

console.log(arr1.join(" "));

////////////////////////////////////////////////////////////////////////////////////////////

// Write a JavaScript program to find the most frequent item in an array 

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findMostFrequentItem(arr) {
    // Create an object to store the frequency of each item
    let frequencyMap = {};
    
    // Iterate through the array and update the frequency map
    arr.forEach(function(item) {
        if (frequencyMap[item]) {
            frequencyMap[item]++;
        } else {
            frequencyMap[item] = 1;
        }
    });

    // Find the most frequent item and its frequency
    let mostFrequentItem;
    let maxFrequency = 0;

    for (let item in frequencyMap) {
        if (frequencyMap[item] > maxFrequency) {
            mostFrequentItem = item;
            maxFrequency = frequencyMap[item];
        }
    }

    return `${mostFrequentItem} ( ${maxFrequency} times )`;
}

// Test Data
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findMostFrequentItem(arr1));  // Output: a ( 5 times )
