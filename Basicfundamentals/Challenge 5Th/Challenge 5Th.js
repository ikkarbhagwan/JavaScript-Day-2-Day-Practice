function logger() {
    console.log("Your are the best");
}
logger();
logger();
logger();

function fruitProcessor(apples, Oranges) {
    console.log("apples, oranges");
    const juice = `Juice with ${apples} apples and ${Oranges} Oranges...`;
    return juice;
}
// const appleJuice = fruitProcessor(5,0);
console.log( fruitProcessor(5,0));
const appleAndOrange = fruitProcessor(2,4); 
console.log(appleAndOrange);

// 2nd example

function calcAge(birthyear){
   const age2 = 2023-birthyear;
   return age2; 

}
const age1 = calcAge(1999);
console.log(age1);