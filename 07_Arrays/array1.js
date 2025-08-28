// Arrays in JavaScript 

let num = [1,2,3,4,5]; // store similar ele's

let mixedType = [1,2,"true","darshan"]; // store different type of ele's

// console.log(num[2]);

let x = [1,2,3,4,5];

// Shallow copy -> when both array references are same
let y = x; 

x[3] = 44;

console.log(x);
console.log(y);

// method - 2 
// Array decleration

let arr = new Array("darshan","sudeep","yesh"); // array constructor

console.log(arr);