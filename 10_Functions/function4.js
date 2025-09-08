// this keyword and arrow function

// ++++++++++++++ this keyword +++++++++++++++

// let user = {
//     username : "darshan",
//     age : 22,
//     message : function welcomeMessage() {
//         return `${this.username} is logined successfully`;
//     }
// }

// console.log(user.message());
// user.username = "sagar";
// console.log(user.message());

// console.log(this); // o/p : {}

// let x = function y() {
//     let username = "darshan";
//     console.log(this.username);  // not accessable
// }

// x();

// ++++++++++ arrow function ++++++++++

// way-1
// let add = (n1, n2) => {
//     return n1 + n2;
// }

// console.log(add(1, 2));

// way-2
// let add = (n1, n2) =>n1 + n2;

// way-3
// let add = (n1, n2) => (n1 + n2);

// console.log(add(1, 2));

let obj = () => ({username : "darshan"});

console.log(obj());