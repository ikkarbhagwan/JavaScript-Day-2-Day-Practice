

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

