
// const myName = document.getElementById('my-name');
// const myBtn = document.getElementById('my-btn');


// const makeSizeLarge = (size) =>{

//     const changeSize = () => {
//             myName.style.fontSize =`${size}px`;

//     }
//     return changeSize;

// }

// const increseBtn = makeSizeLarge(55);

// myBtn.addEventListener('click', increseBtn)

// counter 

// function makeCounter() {
//     let count = 1;


//     function increment() {
//         console.log(count++)
//     }

//     return increment;

// }

// const counter1 = makeCounter();

// counter1();
// counter1();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function main(){

//     const name = "john doe";


//     function chiild(){

//         console.log(name);

//     }

//     chiild();


// }
// let fn = main();
// console.log(fn);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function adder(){

    const num = 10;
    
    function add(b){

        console.log(num + b)
    }

    return add;
    
}

let closure = adder(5);

closure(10);
closure(10);