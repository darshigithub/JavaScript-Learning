// Date in JS

// let myDate = new Date();

// console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myOwnDate = new Date(2025, 8, 20, 6, 45, 23);

// console.log(myOwnDate.toLocaleString());

let timeStramp = Date.now();

console.log(timeStramp);

// Impartent
let otherDate = new Date();

otherDate.toLocaleString("default", {
    "weekday" : "long",
    "day" : "2-digit",
});