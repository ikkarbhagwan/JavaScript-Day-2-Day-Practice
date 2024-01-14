function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges..`;
    return juice;
}

console.log(fruitProcessor(2, 3));


////////////////////////////////////////

// call method in 

let myName = {
    firstname:"Bhagwan",
    lastname:"ikkar",
    printFullName: function(school){
        console.log(this.firstname + " " + this.secondname);

    }
    
}
myName.printFullName();

let hisName = {
    firstname:"vinod",
    lastname:"sharma"
}
myName.printFullName.call(hisName);


