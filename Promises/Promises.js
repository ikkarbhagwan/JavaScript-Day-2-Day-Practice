// const myPromise = new Promise((resolve,reject) =>{


//     setTimeout(() =>{
//         const success = true;

//         if(success){
//             resolve("Opration done");

//         }else{
//             reject("opration fail");


//         }


//     },2000)

// myPromise
// .then( (result) =>{
//     console.log("success: ", result)
// })
// .catch((error)=>{
//     console.log("success: ", error)

// });


// promise second example 

const promiseOne = new Promise((resolve, reject) => {

    // you can perform asyncronus task like : network call etc
    setTimeout(() => {
        console.log("You have created a promise!");
        resolve()
    }, 1000);


});


promiseOne.then(function(){
    console.log("promise consumed");

})