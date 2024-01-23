
const myName = document.getElementById('my-name');
const myBtn = document.getElementById('my-btn');


const makeSizeLarge = (size) =>{

    const changeSize = () => {
            myName.style.fontSize =`${size}px`;

    }
    return changeSize;

}

const increseBtn = makeSizeLarge(55);

myBtn.addEventListener('click', increseBtn)