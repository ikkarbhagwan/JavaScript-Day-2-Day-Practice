// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const numberOne  =[11,12,13,14];
const numberTwo = [14,15,16,17];

const numberCombine = [...numberOne, ...numberTwo];

console.log(numberCombine);

// use in objects 

const myVehicle ={
    brand : "tata",
    price : 400000,
    color : "red"
}
const updateMyVehicle ={

    type : "car",
    year :2021,
    seson : "winter"
}

const myUpdateVehicles ={...myVehicle,...updateMyVehicle};

console.log(myUpdateVehicles);

// Udemy examples 

const arr = [7,8,9];

// const newArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(newArr);

const UseSpread = [12,1, ...arr];
console.log(UseSpread);

//more examples 

const newMenu =[...UseSpread, 'myNAME'];
console.log(newMenu);

//iterables : Arrays ,strings ,Maps 

const str = 'johans';
const letter =[...str, 'j'];
console.log(letter);
console.log(...str);



