const myName = () => {
    return "Hello";
}

const greeting = (sayHi, name) => {

    console.log(sayHi() + " " + name);

}
greeting(myName, 'Thapa Technical');

// 2

const schoolName = () => {
    return ("Hello!");

};

const adress = (techer, student) => {
    console.log(techer() + " " + student);


}

adress(schoolName, "Bright students");

// this is known as callBack function 

function doSomethingAsync(callBack) {

    setTimeout(function () {
        console.log("Task Completed !!");

        callBack();

    }), 4000


}

// how callback work 
// 1.
setTimeout(function third() {

    console.log("this is asyncronus!!");


}, 5000);


function first(second) {
    console.log("this is first ");
    second();
}
first(function second() {
    console.log("this is second ");

});

// >button>
// addEventListener to button 
function attachEventListeners() {

    document.querySelector("#btn").addEventListener('click', function xyz() {
        console.log("button was clicked!!");
    })

}
attachEventListeners() ;

// this forms a closure bcox inner functions have a acces of outer function 

