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


promiseOne.then(function () {
    console.log("promise consumed");

})



// promise third example 

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {

        resolve({ userName: "chai", email: "ikk@gmail.com" })

    }, 1000)

});

promiseThree.then(function (user) {
    console.log(user);

});


// promise four example 

const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ userName: "bhagwan", password: "12345" })
        } else {
            reject('error:something went wrong!')
        }


    }, 1000)
});

promiseFour.then(function (user) {
    console.log(user);
    return user.userName
})
    .then((userName) => {
        console.log(userName);
    })
    .catch(function (error) {
        console.log(error);
    })


    ////////////////////////////////////////////////////////////////////////////////////////////

    const loginPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let error = false;
            if (!error) {
                resolve({ username: "bhagwan", password: "12345" });
            } else {
                reject('error: something went wrong!');
            }
        }, 1000);
    });
    
    loginPromise
        .then(function (user) {
            console.log(user);
            return user.username;
        })
        .then((username) => {
            console.log(username);
        })
        .catch(function (error) {
            console.log(error);
        });
    


        ////////////////////////////////////////////////////////////////////////////////////////////


        const userAuthPromise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                let isError = false;
                if (!isError) {
                    resolve({ userAlias: "bhagwan", userPass: "12345" });
                } else {
                    reject('error: something went wrong!');
                }
            }, 1000);
        });
        
        userAuthPromise
            .then(function (user) {
                console.log(user);
                return user.userAlias;
            })
            .then((userAlias) => {
                console.log(userAlias);
            })
            .catch(function (error) {
                console.log(error);
            });
        


            ////////////////////////////////////////////////////////////////////////////////////////////

            const authenticationPromise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    let hasError = false;
                    if (!hasError) {
                        resolve({ userID: "bhagwan", userPassword: "12345" });
                    } else {
                        reject('error: something went wrong!');
                    }
                }, 1000);
            });
            
            authenticationPromise
                .then(function (user) {
                    console.log(user);
                    return user.userID;
                })
                .then((userID) => {
                    console.log(userID);
                })
                .catch(function (error) {
                    console.log(error);
                });
            


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const userLoginPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let isError = false;
        if (!isError) {
            resolve({ username: "bhagwan", password: "12345" });
        } else {
            reject('error: something went wrong!');
        }
    }, 1000);
});

userLoginPromise
    .then(function (user) {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    });


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////