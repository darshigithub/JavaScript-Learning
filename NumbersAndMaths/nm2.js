// Maths in js

console.log(Math);

console.log(Math.PI);
console.log(Math.abs(-4)); // negative value converted into positive

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5

console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.9)); // 4

console.log(Math.max(2,3,4,5,6));
console.log(Math.min(4,5,6,7,1));

// -------------- Random Number ----------------

console.log(Math.random());
console.log((Math.random() * 10) + 1);

console.log(Math.floor((Math.random() * 10000) + 1));

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);