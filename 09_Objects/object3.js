// Objectde-structuring And JSON api

let users = {
    fullName : "Darshan",
    email : "abc@gmail.com",
    age : 22
}

// console.log(users.fullName); // lengthy process

// Object de-structuring
const {fullName} = users;
console.log(fullName);

const {fullName : name} = users;
console.log(name);

// json -> {java script object notation} 

// {
//     "" : "",
//     "" : "",
//     "" : ""
// }

// [
//     "" : {

//     }
//     "" : {

//     }
// ]