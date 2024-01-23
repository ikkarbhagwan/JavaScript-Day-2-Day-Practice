
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

function makeCounter() {
    let count = 1;


    function increment() {
        console.log(count++)
    }

    return increment;

}

const counter1 = makeCounter();

counter1();
counter1();

