const myName = () => {
    return "Hello";
}

const greeting = (sayHi, name) => {
    
    console.log(sayHi()+ " " + name);

}
greeting(myName,'Thapa Technical');

// 2

const schoolName = () => {
    return ("Hello!");

};

const adress = (techer, student) => {
    console.log(techer() + " " + student);


}

adress(schoolName, "Bright students");

// this is known as callBack function 

function doSomethingAsync(callBack){

    setTimeout(function(){
        console.log("Task Completed !!");

        callBack();
        
    }),4000

    
}