// We leaning the closures =
//  "A closure is a fucntion which has acces to to its outer scope's variables."


// in other language we can say that A closure is a inner function who which is declared in its outer functions whio has acces to its variable..

// 1

// const closure = 10;
// function show(){
//     var j = 20;
//     document.write(j + "<br>");
//     document.write(closure + "<br>");
// }
// show();

// 2

const isOuterFunction = (a) => {
    let b = 45;


    const isInnerFunction = () => {
        let sum = a + b;
        console.log( `The sum of two number is ${sum}`);

    }
    isInnerFunction();

}

    isOuterFunction(10);

// 3

const outer = (x) => {
    let y = 3;

    const inner = () => {
        let sum = x + y;
        console.log(` the sum of x and Y ${sum}`);

    }

    inner();
}
outer(10);

//////////////////////////////////////////////////////////

// Higher Order Functions 

function createMultiplier(x) {
    return function(factor) {
        return x * factor;
    };
}

const double = createMultiplier(2);
const result = double(6);
console.log(result); // Output: 12


//////////////////////////////////////////////////////////////////////////////////////////////////////

// closure example 

const outerFunction = () => {

    let outerVariable = "Im from outer variable";

    function innerfunction(){
        console.log(outerVariable);

    }
    return innerfunction;
}

let closure = outerFunction();

closure();


// 2nd example of closure 

function counter(){
    let count = 0;

    function increment(){
        count++;
        console.log(count);

    }
    function decrement()
    {
        count--;
        console.log(count)
    }

    return {increment, decrement};

}
let myCounter = counter();

myCounter.decrement();
myCounter.increment();
myCounter.increment();


// 3nd example of closure

function createCounter(){
    let sound = 0;

    function base(){
        sound++;
        console.log(sound);

    }

    function valume(){
        sound--;
        console.log(sound);

    }

    function reset(){
        sound = 0;
        console.log(`sound is ${sound} level`);
    }
    return {base,valume,reset};


}


let system = createCounter();

createCounter.base();
createCounter.valume();






// Real life examples 

function createButton(){
    let clickCount = 0;
    
    
    function handleClick(){
        clickCount++;
        console.log(`Button Clicked ${clickCount} times`);
        

    }

    const button = document.createElement("button");
    button.textContent = "click me";

    button.addEventListener("click",handleClick );

    return {button, getClickCount: ()=> clickCount};

}

const myButton = createButton();

/////////////////////////////////////////////////////////////////////////////////////////////////////

// closure examples 

function main(){

    const name = "piyush garg"


    function sayName(){

        console.log(name);

    }

    sayName();

}

let formedClosure = main();

console.log(formedClosure);

