// // async keyword in js 

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({
//                 language: "Javascript",
//                 tech: "Frontend"
//             });
//         } else {
//             reject(`Javascript went worng!`);
//         }
//     }, 1000)
// });

// // promiseOne.then().catch().finally(); method - 1

// async function consumePromise() { // method - 2
//     try {
//         let response = await promiseOne;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise();

// async function getAllUsers() {
//     try {
//         let response = await fetch("https://randomuser.me/api/");
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error : " + error);
//     }
// }

// getAllUsers();

function getAllUsers() {
    fetch("http://localhost:9090/allStudents").then(function (response) {
        return response;
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("Resourse clean up logic");
    });
}

getAllUsers();
