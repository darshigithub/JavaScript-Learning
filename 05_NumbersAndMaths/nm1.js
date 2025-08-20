// Numbers and math in js

let score = 23;

console.log(score);

let balance = new Number(100);

balance = 120;

console.log(balance);

console.log(typeof balance);

console.log(balance.toString().length);

let otherNumber = 123.456;

console.log(otherNumber.toFixed(2));

console.log(otherNumber.toPrecision(4));

let x = 10000000;

console.log(x.toLocaleString()); // us style

console.log(x.toLocaleString("en-in")); // indian rupee