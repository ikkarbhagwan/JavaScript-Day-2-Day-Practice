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
