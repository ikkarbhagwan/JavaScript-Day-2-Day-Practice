const myPromise = new Promise((resolve,reject) =>{


    setTimeout(() =>{
        const success = true;

        if(success){
            resolve("Opration done");

        }else{
            reject("opration fail");


        }


    },2000)

myPromise
.then( (result) =>{
    console.log("success: ", result)
})
.catch((error)=>{
    console.log("success: ", error)

});

