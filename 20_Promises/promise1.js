// Promises in JS

// const promiseOne = new Promise(function (resolve, reject) {
//     // Async tasks

//     // Network calls
//     // Database
//     // File reading 
//     // async code 

//     setTimeout(function () {
//         console.log("Promise one");
//         resolve();
//     }, 1000);
// });

// promiseOne.then(function () {
//     console.log("Promise one resolved");
// })

// new Promise(function (resolve, reject) {
//     // async code
//     setTimeout(function () {
//         console.log("Promise two");
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.log("Promise two resolved");
// });

// get data from promise 

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            "username": "Darshan",
            "age": 22,
            "address": "Challakere"
        });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
    const error = false;

    setTimeout(function () {
        if (!error) {
            resolve({
                username: "Darshan",
                password: "12345"
            });
        } else {
            reject(`Error : Somthing went worng!`);
        }
    }, 1000);

});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Mandatray statements and resourse clean up logic");
});