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