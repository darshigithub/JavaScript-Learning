// Array methods

let num = [1,2,3,4,5,6];

console.log(num.length);

num.push(10); // add ele to last 
num.pop(); // delete last ele

num.unshift(44); // add ele to first and shift all ele's to right

num.shift(); // removes first element

console.log(num);

console.log(num.includes(6)); // ele is not there it return false

console.log(num.indexOf(67)); // return -1 if ele not there

let joinedArr = num.join(); 

console.log("Original arr : ", num);
console.log("Joined arr : ", joinedArr);


// slice, splice

let arr = ["A","apple", "banana", "mango", "grappes"];
console.log(arr);
// slice -> exclusive upper index and array remains same
let sliceArr = arr.slice(1,3);
console.log(sliceArr);
console.log(arr);

// splice -> inclusive upper index and array changed 
let spliceArr = arr.splice(1,3);
console.log(spliceArr);
console.log(arr);