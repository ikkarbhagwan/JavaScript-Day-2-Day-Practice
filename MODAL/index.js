const button = document.querySelector('button');
const modalContainer = document.querySelector('container');

button.addEventListener('click',() => {
    modalContainer.classList.remove("hide");

});


modalContainer.addEventListener('click', () => {
    const button = event.target.name;
    if(button === "close"){
        modalContainer.classList.add("hide");
        
    }
})